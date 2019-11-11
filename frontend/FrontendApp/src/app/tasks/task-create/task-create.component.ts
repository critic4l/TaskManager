import { Component, OnInit, Inject, Input, AfterViewInit } from '@angular/core';
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

  constructor(@Inject('table') table, private service: TaskService) {
    this.table = table.value;
  }

  ngOnInit() {

  }

  createTask(taskForm: NgForm) {
    console.log(taskForm.value);
    const taskToCreate = new Task(taskForm.value.taskTitle, taskForm.value.taskDescription, this.table);
    console.log(taskToCreate);
    this.service.createTask(taskToCreate).subscribe(
      (res) => { console.log(res); },
      (err) => { console.log(err); },
    );
  }

}
