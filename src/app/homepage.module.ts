import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppVersionComponent} from './appVersion.component';

@NgModule({
    declarations: [AppVersionComponent],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppVersionComponent]
})
export class HomepageModule {
}
