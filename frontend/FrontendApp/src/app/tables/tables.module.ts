import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesviewComponent } from './tablesview/tablesview.component';
import { TableComponent } from './table/table.component';
import { TablesService } from './tables.service';
import { HttpClientModule } from '@angular/common/http';
import { TablesResolver } from './tables.resolver';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TablesviewComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [
    TablesService,
    TablesResolver
  ]
})
export class TablesModule { }
