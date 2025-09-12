// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Import all spec files explicitly
import './app/app.component.spec';
import './app/common/headbar/headbar.component.spec';
import './app/model/item.spec';
import './app/page/contact/contact.component.spec';
import './app/page/game/game.component.spec';
import './app/page/home/home.component.spec';
import './app/service/convert.service.spec';
import './app/service/notification.service.spec';
