import { Component, OnInit } from '@angular/core';
import { EntityCreateComponent } from 'src/app/shared/components/entity-create/entity-create.component';
import { NgForm } from '@angular/forms';
import { Table } from '../classes/table';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['./table-create.component.css']
})
export class TableCreateComponent extends EntityCreateComponent {
  

  constructor(private service: TablesService) {
    super();
   }

  protected createEntity(form: NgForm): void {
    const tableToCreate = new Table(form.value.tableName, form.value.tableDescription);
    this.service.createTable(tableToCreate).subscribe(
      (res) => { this.createEntityEvent.emit(res); },
      (err) => { console.log(err); },
    );
  }

}
