import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
