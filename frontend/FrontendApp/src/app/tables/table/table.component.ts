import { Component, OnInit, Input, ViewContainerRef, Injector, ReflectiveInjector, AfterContentChecked, Output, EventEmitter } from '@angular/core';
import { TablesService } from '../tables.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Table } from '../classes/table';
import { Task } from 'src/app/tasks/classes/task';
import { TaskService } from 'src/app/tasks/task.service';
import { TaskCreateComponent } from 'src/app/tasks/task-create/task-create.component';
import { OverlayServiceService } from 'src/app/shared/services/overlay-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentChecked {


  @Output()
  tableDestroyedEvent: EventEmitter<any> = new EventEmitter();

  constructor(private tableService: TablesService,
              private taskService: TaskService,
              private overlayService: OverlayServiceService,
              private viewContainerRef: ViewContainerRef) { }



  @Input()
  tableInfo: Table;

  @Input()
  connectedLists: string[];

  res;

  ngAfterContentChecked() {

  }

  ngOnInit() {
    this.tableService.getTasksFromTable(this.tableInfo.id).subscribe(
      (res) => {
        this.res = res[0];
      },
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

    // tslint:disable-next-line: deprecation
    const injector: Injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'table',
        useValue: {
          value: this.tableInfo
        }
      }
    ]);

    this.overlayService.showEntityCreationOverlay(TaskCreateComponent, injector, this.res, this.viewContainerRef);
  }

  updateTaskTable(task: Task, table: Table) {
    task.table = table;
    this.taskService.updateTask(task).subscribe(
      (res) => { console.log(res); },
      (err) => { console.log(err); },
    );
  }

  removeTable() {
    this.tableService.deleteTable(this.tableInfo).subscribe(
      (res) => { this.tableDestroyedEvent.emit(this.tableInfo); },
      (err) => { console.log(err); }
    );
    //
  }
}
