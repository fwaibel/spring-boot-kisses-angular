import {Component} from '@angular/core';

import {AppVersionService} from './appVersion.service';

@Component({
    selector: 'app-version',
    template: `
        <div>{{appVersion}}</div>
    `,
    providers: [AppVersionService]
})

export class AppVersionComponent {

    constructor(private appVersionService: AppVersionService) {
        let result = this.appVersionService.load();
        result.subscribe(res => this.appVersion = res.number);
    }

    appVersion: string;
}
