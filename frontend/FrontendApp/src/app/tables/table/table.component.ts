import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  protected dupa = Math.random();

  @Input()
  tableInfo: object;
  res: object;

  constructor(private service: TablesService) { }

  ngOnInit() {
    this.service.getTasksFromTable(this.tableInfo.id).subscribe(
      (res) => { this.res = res; },
      (err) => { console.log(err); }
    );

  }

}
