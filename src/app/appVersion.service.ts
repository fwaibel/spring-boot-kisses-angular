import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {AppVersion} from "./model/appVersion";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppVersionService {
    constructor(private http: HttpClient) {
    }

    load(): Observable<AppVersion> {
        return this.http.get<AppVersion>('../server/version')
    }
}
