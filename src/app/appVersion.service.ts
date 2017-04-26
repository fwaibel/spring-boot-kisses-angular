import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {AppVersion} from "./model/appVersion";

@Injectable()
export class AppVersionService {
    constructor(private http: Http) {
    }

    load() {
        return this.http
            .get('../server/version')
            .map(response => <AppVersion> response.json());
    }
}
