import {NgModule} from "@angular/core"
import {AboutComponent} from "./about.component";
import {AboutRoutingModule} from "./about-routing.module";
import {MaterialTestComponent} from "./material-test.component";

import {MdButtonToggle} from "@angular2-material/button-toggle";
import {UiLibModule} from "../ui-lib.module";

@NgModule({
    imports: [AboutRoutingModule, UiLibModule],
    declarations: [AboutComponent, MaterialTestComponent],
    exports: [AboutRoutingModule],
    providers: [],
})
export class AboutModule {

}
