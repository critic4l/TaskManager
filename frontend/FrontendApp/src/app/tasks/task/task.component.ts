import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../classes/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Output()
  removeTaskEvent = new EventEmitter();

  @Input()
  task: Task;

  constructor() { }

  ngOnInit() {
  }

  removeTask() {
    this.removeTaskEvent.emit(this.task);
  }

}
