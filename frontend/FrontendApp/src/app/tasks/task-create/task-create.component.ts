import { Component, OnInit, Inject, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Table } from 'src/app/tables/classes/table';
import { Task } from '../classes/task';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  protected table: Table;

  @Output()
  public createTaskEvent: EventEmitter<any> = new EventEmitter();

  constructor(@Inject('table') table, private service: TaskService) {
    this.table = table.value;
  }

  ngOnInit() {

  }

  createTask(taskForm: NgForm) {
    const taskToCreate = new Task(taskForm.value.taskTitle, taskForm.value.taskDescription, this.table);
    this.service.createTask(taskToCreate).subscribe(
      (res) => { this.createTaskEvent.emit(); },
      (err) => { console.log(err); },
    );
  }

}
