import { Component, OnInit, Input, ComponentFactoryResolver, AfterContentInit, AfterViewInit } from '@angular/core';
import { TablesService } from '../tables.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Table } from '../classes/table';
import { Task } from 'src/app/tasks/classes/task';
import { TaskService } from 'src/app/tasks/task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  tableInfo: Table;

  @Input()
  connectedLists: string[];

  res;


  constructor(private tableService: TablesService, private taskService: TaskService) { }

  ngOnInit() {
    this.tableService.getTasksFromTable(this.tableInfo.id).subscribe(
      (res) => { this.res = res[0]; },
      (err) => { console.log(err); },
    );
  }


  drop(event: CdkDragDrop<string[]>, tableInfo: Table) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.updateTaskTable(event.item.data, tableInfo);
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addNewTask() {
    console.log('add new task');
  }

  updateTaskTable(task: Task, table: Table) {
      task.table = table;
      this.taskService.updateTask(task).subscribe(
        (res) => { console.log(res); },
        (err) => { console.log(err); },
      );
  }

}
