import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[resizableColumn]',
})
export class ResizableColumnDirective implements OnInit {
  @Input() resizableColumn = false;

  private startX = 0;

  private startWidth = 0;

  private column: HTMLElement = {} as HTMLElement;

  private table: HTMLElement = {} as HTMLElement;

  private isPressed = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.column = this.el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.resizableColumn) {
      return;
    }

    const row = this.renderer.parentNode(this.column);
    console.log(this.column);
    const thead = this.renderer.parentNode(row);

    this.table = this.renderer.parentNode(thead);

    const resizer = this.renderer.createElement('span');

    this.renderer.addClass(resizer, 'resize-holder');
    this.renderer.appendChild(this.column, resizer);
    this.renderer.listen(resizer, 'mousedown', this.onMouseDown);
    this.renderer.listen(this.table, 'mousemove', this.onMouseMove);
    this.renderer.listen('document', 'mouseup', this.onMouseUp);
  }

  onMouseDown = (event: MouseEvent): void => {
    this.isPressed = true;
    this.startX = event.pageX;
    this.startWidth = this.column.offsetWidth;
    event.preventDefault();
  };

  onMouseMove = (event: MouseEvent): void => {
    const offset = 35;
    event.preventDefault();

    if (this.isPressed && event.buttons) {
      this.renderer.addClass(this.table, 'resizing');
      // Calc width of column
      const width = this.startWidth + (event.pageX - this.startX - offset);

      // Set table header with
      this.renderer.setStyle(this.column, 'width', `${width}px`);
    }
  };

  onMouseUp = (event: Event): void => {
    if (this.isPressed) {
      this.isPressed = false;
      this.renderer.removeClass(this.table, 'resizing');
    }

    event.preventDefault();
  };
}
