import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskCreateComponent } from './task-create/task-create.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TaskComponent,
    TaskCreateComponent
  ],
  providers: [
    TaskService
  ],
  entryComponents: [
    TaskCreateComponent
  ]
})
export class TasksModule { }
