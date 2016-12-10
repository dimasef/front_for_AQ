import {NgModule} from "@angular/core"
import {TabMenuModule, MenuModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {TreeModule, SharedModule } from 'primeng/primeng';
import {InputSwitchModule, DialogModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {PrettyPrintPipe} from "./pretty-print.pipe";
import {DataTableModule, GrowlModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';
import {MdProgressCircleModule} from "@angular2-material/progress-circle"

import { InfiniteScrollModule} from 'angular2-infinite-scroll';


import {MdButtonToggle} from "@angular2-material/button-toggle";
import {MdInput} from "@angular2-material/input";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MdButtonModule} from '@angular2-material/button';
import {MdRippleModule} from "@angular2-material/core"
import {MdSlideToggleModule} from "@angular2-material/slide-toggle"
import {MdCardModule} from "@angular2-material/card"


@NgModule({
    imports: [
      MdProgressCircleModule,
      InfiniteScrollModule,
      MdCardModule,
      MdButtonModule,
      MdSlideToggleModule,
      MdRippleModule,
      FormsModule, BrowserModule,
      TabMenuModule,
      MenuModule,
      InputTextModule,
      ButtonModule,
      OverlayPanelModule,
      CheckboxModule,
      TreeModule,
      SharedModule,
      InputSwitchModule,
      DialogModule,
      AutoCompleteModule,
      DataTableModule,
      GrowlModule,
      InputTextareaModule,
      EditorModule
      ,
    CalendarModule],
    declarations: [
      PrettyPrintPipe,MdInput, MdButtonToggle,
    ],
    exports: [
      MdProgressCircleModule,
      InfiniteScrollModule,
      MdCardModule,
      MdButtonModule,
      MdRippleModule,MdSlideToggleModule,
      FormsModule, BrowserModule,
      MdInput, MdButtonToggle,
      OverlayPanelModule,
      EditorModule,
      TabMenuModule,
      MenuModule,
      InputTextModule,
      ButtonModule,
      CheckboxModule,
      TreeModule,
      SharedModule,
      InputSwitchModule,
      DialogModule,
      AutoCompleteModule,
      PrettyPrintPipe,
      InputTextareaModule,
    DataTableModule,
    GrowlModule,
    CalendarModule],
    providers: []
})
export class UiLibModule {

}
