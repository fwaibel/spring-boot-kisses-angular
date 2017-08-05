import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppVersionComponent} from './appVersion.component';

@NgModule({
    declarations: [AppVersionComponent],
    imports: [BrowserModule, HttpClientModule],
    bootstrap: [AppVersionComponent]
})
export class HomepageModule {
}
