import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule, SharedModule],
  exports: [TableComponent],
})
export class TableModule {}
