import { Component } from '@angular/core';
import { ELEMENT_DATA } from 'src/app/shared/constants';
import { IPeriodicElement } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource: IPeriodicElement[] = ELEMENT_DATA;
}
