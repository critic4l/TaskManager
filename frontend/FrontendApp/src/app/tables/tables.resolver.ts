import { Injectable } from "@angular/core";
import { TablesService } from './tables.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class TablesResolver implements Resolve<any> {

    constructor(private service: TablesService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.service.getAllTables();
    }
}