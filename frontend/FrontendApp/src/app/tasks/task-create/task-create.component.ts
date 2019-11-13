import { Component, OnInit, Inject, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Table } from 'src/app/tables/classes/table';
import { Task } from '../classes/task';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { EntityCreateComponent } from 'src/app/shared/components/entity-create/entity-create.component';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent extends EntityCreateComponent {

  protected table: Table;

  constructor(@Inject('table') table, private service: TaskService) {
    super();
    this.table = table.value;
  }

  protected createEntity(form: NgForm): void {
    const taskToCreate = new Task(form.value.taskTitle, form.value.taskDescription, this.table);
    this.service.createTask(taskToCreate).subscribe(
      (res) => { this.createEntityEvent.emit(res); },
      (err) => { console.log(err); },
    );
  }

}
