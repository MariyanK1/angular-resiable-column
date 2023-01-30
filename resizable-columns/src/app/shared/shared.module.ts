import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableColumnDirective } from './directives/resizable-column.directive';

@NgModule({
  declarations: [ResizableColumnDirective],
  imports: [BrowserModule, NoopAnimationsModule],
  providers: [],
  exports: [ResizableColumnDirective],
})
export class SharedModule {}
