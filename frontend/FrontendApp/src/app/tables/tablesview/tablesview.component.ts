import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Table } from '../classes/table';


@Component({
  selector: 'app-tablesview',
  templateUrl: './tablesview.component.html',
  styleUrls: ['./tablesview.component.css']
})
export class TablesviewComponent implements OnInit {

  protected tables: Table[];
  protected dropListNames: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.tables = this.route.snapshot.data.getAllTables;
    this.initDropListNames();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tables, event.previousIndex, event.currentIndex);
  }

  initDropListNames() {
    // tslint:disable-next-line: forin
    for (const t in this.tables) {
      this.dropListNames.push('task-list' + this.tables[t].id);
    }
  }

  

}
