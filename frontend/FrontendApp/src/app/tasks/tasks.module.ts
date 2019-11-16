import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskCreateComponent } from './task-create/task-create.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    TaskComponent,
    TaskCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule
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
