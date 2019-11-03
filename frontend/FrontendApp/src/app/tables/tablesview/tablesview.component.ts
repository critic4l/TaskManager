import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tablesview',
  templateUrl: './tablesview.component.html',
  styleUrls: ['./tablesview.component.css']
})
export class TablesviewComponent implements OnInit {

  protected tables: JSON[];

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.tables = this.route.snapshot.data.getAllTables;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tables, event.previousIndex, event.currentIndex);
  }

}
