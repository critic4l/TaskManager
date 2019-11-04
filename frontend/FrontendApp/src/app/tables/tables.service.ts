import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';

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

  getTasksFromTable(tableId: number) {
    const URL = this.URL + '/getTasksFromTable?tableId=' + tableId;
    return this.http.get(URL).pipe(toArray());
  }
}
