import { Component, OnInit, Input, ViewContainerRef, Injector, ReflectiveInjector, ComponentRef } from '@angular/core';
import { TablesService } from '../tables.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Table } from '../classes/table';
import { Task } from 'src/app/tasks/classes/task';
import { TaskService } from 'src/app/tasks/task.service';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import { TaskCreateComponent } from 'src/app/tasks/task-create/task-create.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  constructor(private tableService: TablesService,
              private taskService: TaskService,
              private overlay: Overlay,
              public viewContainerRef: ViewContainerRef) { }

  

  @Input()
  tableInfo: Table;

  @Input()
  connectedLists: string[];

  res;

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
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally().centerVertically();


    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    const injector: Injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'table',
        useValue: {
          value: this.tableInfo
        }
      }
    ]);

    const componentRef: ComponentRef<TaskCreateComponent> = overlayRef.attach(new ComponentPortal(TaskCreateComponent,
                                                                              this.viewContainerRef,
                                                                              injector));
    const taskCreateInstance = componentRef.instance as TaskCreateComponent;
    taskCreateInstance.createTaskEvent.subscribe(
      () => {
         overlayRef.detach();
         this.ngOnInit();
      }
    )
  }

  updateTaskTable(task: Task, table: Table) {
    task.table = table;
    this.taskService.updateTask(task).subscribe(
      (res) => { console.log(res); },
      (err) => { console.log(err); },
    );
  }

}
