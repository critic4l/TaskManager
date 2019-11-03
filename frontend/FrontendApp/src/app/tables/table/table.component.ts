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
  res;

  constructor(private service: TablesService) { }

  ngOnInit() {
    console.log(this.tableInfo);
    this.service.getTasksFromTable(this.tableInfo.id).subscribe(
      (res) => {console.log(res); this.res = res;},
      (err) => {console.log(err);},
      () => {console.log("XD");}
    )
  
  }

}
