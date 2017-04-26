import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {HomepageModule} from './app/homepage.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(HomepageModule);
