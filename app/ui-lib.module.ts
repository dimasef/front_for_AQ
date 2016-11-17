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

@NgModule({
    imports: [
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
      DataTableModule,
      GrowlModule],
    declarations: [
      PrettyPrintPipe
    ],
    exports: [
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
    DataTableModule,
    GrowlModule],
    providers: []
})
export class UiLibModule {

}
