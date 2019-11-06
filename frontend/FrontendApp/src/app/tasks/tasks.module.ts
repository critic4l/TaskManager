import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TaskComponent
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
