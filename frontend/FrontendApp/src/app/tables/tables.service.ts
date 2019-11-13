import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { Table } from './classes/table';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private URL = 'http://localhost:8080/table';

  constructor(private http: HttpClient) { }

  getAllTables(): Observable<any> {
    const URL = this.URL + '/getAllTables';
    return this.http.get(URL);
  }

  getTasksFromTable(tableId: number): Observable<any> {
    const URL = 'http://localhost:8080/task/getAllTasksByTableId?id=' + tableId;
    return this.http.get(URL).pipe(toArray());
  }

  createTable(table: Table): Observable<any> {
    const URL = this.URL + '/createTable';
    return this.http.post(URL, table);
  }

  deleteTable(table: Table): Observable<any> {
    const URL = this.URL + '/deleteTable?id=' + table.id;
    console.log(URL);
    return this.http.delete(URL);
  }
}
