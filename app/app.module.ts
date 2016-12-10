import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import {AppService} from "./app.service";

import {AdminModule} from "./admin/admin.module";

import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeModule} from "./home/home.module";
import {AboutModule} from "./about/about.module";
import {UiLibModule} from "./ui-lib.module";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {RequestOptions} from "@angular/http";
import {PrettyPrintPipe} from "./pretty-print.pipe";
import {MessageService} from "./service/message.service";
import {ProfileModule} from "./profile/profile.module";
import {NotificationsModule} from "./notifications/notifications.module";
import {NotificationsService} from "./service/notifications.service";
import {FeedService} from "./service/feed.service";



//import { MdRippleModule } from '@angular2-material/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    HomeModule,
    AboutModule,
    ProfileModule,
    AppRoutingModule,//this should be the lastest import cos this routing module has not found map
    //MdRippleModule,
    UiLibModule,
    NotificationsModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [
    AppService, CookieService, MessageService, NotificationsService, FeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
