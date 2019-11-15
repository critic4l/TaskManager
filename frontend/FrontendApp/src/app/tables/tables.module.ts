import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesviewComponent } from './tablesview/tablesview.component';
import { TableComponent } from './table/table.component';
import { TablesService } from './tables.service';
import { HttpClientModule } from '@angular/common/http';
import { TablesResolver } from './tables.resolver';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TasksModule } from '../tasks/tasks.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { TableCreateComponent } from './table-create/table-create.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TablesviewComponent,
    TableComponent,
    TableCreateComponent,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    HttpClientModule,
    DragDropModule,
    TasksModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    TablesService,
    TablesResolver
  ],
  exports: [

  ],
  entryComponents: [
    TableCreateComponent
  ]
})
export class TablesModule { }
