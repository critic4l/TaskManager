import { Component, OnInit, Inject, Input, AfterViewInit } from '@angular/core';
import { Table } from 'src/app/tables/classes/table';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  table: Table;

  constructor(@Inject('table') table) {
    this.table = table.value;
  }

  ngOnInit() {

  }

  createTask() {
    console.log("test");
  }

}
