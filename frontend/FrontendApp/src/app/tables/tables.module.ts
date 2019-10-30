import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesviewComponent } from './tablesview/tablesview.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [TablesviewComponent, TableComponent],
  imports: [
    CommonModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
