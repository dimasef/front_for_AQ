import { NgModule } from '@angular/core';
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
import {AuthModule} from "./auth/auth.module";
import {QuestionsModule} from "./questions/questions.module";
import {CategoriesModule} from "./categories/categories.module";
import {AboutModule} from "./about/about.module";
import {UiLibModule} from "./ui-lib.module";



//import { MdRippleModule } from '@angular2-material/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    HomeModule,
    AuthModule,
    QuestionsModule,
    CategoriesModule,
    AboutModule,
    AppRoutingModule,//this should be the lastest import cos this routing module has not found map
    //MdRippleModule,
    UiLibModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
