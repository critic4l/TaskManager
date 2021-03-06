import { Component, OnInit, ViewContainerRef, ViewChildren, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Table } from '../classes/table';
import { OverlayServiceService } from 'src/app/shared/services/overlay-service.service';
import { TableCreateComponent } from '../table-create/table-create.component';


@Component({
  selector: 'app-tablesview',
  templateUrl: './tablesview.component.html',
  styleUrls: ['./tablesview.component.css']
})
export class TablesviewComponent implements OnInit, AfterViewInit {

  protected tables: Table[];
  protected dropListNames: string[] = [];

  @ViewChildren('tables') tablesViewChildren;

  constructor(private route: ActivatedRoute,
              private overlayService: OverlayServiceService,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.tables = this.route.snapshot.data.getAllTables;
    this.initDropListNames();
  }

  ngAfterViewInit(): void {
    this.tablesViewChildren.changes.subscribe(
      () => { this.initDropListNames(); }
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tables, event.previousIndex, event.currentIndex);
  }

  initDropListNames() {
    // tslint:disable-next-line: forin
    for (const t in this.tables) {
      this.dropListNames.push('' + this.tables[t].id);
    }
  }

  addNewTable() {
    this.overlayService.showEntityCreationOverlay(TableCreateComponent, null, this.tables, this.viewContainerRef);
  }

  onTableDeleted(table: Table) {
    const index = this.tables.indexOf(table);
    if (index > -1) {
      this.tables.splice(index, 1);
    }
  }

}
