import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesviewComponent } from './tablesview/tablesview.component';
import { TablesResolver } from './tables.resolver';


const routes: Routes = [
  { path: '', component: TablesviewComponent, resolve: { getAllTables: TablesResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
