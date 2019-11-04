import { Component, OnInit, Input, ComponentFactoryResolver, AfterContentInit, AfterViewInit } from '@angular/core';
import { TablesService } from '../tables.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  tableInfo;

  @Input()
  connectedLists: string[];

  res;


  constructor(private service: TablesService) { }

  ngOnInit() {
    this.service.getTasksFromTable(this.tableInfo.id).subscribe(
      (res) => { this.res = res[0]; },
      (err) => { console.log(err); },
    );
    console.log(this.connectedLists);
  }


  drop(event: CdkDragDrop<string[]>) {
    console.log(event.item);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
