import {NgModule} from "@angular/core"
import {AboutComponent} from "./about.component";
import {AboutRoutingModule} from "./about-routing.module";


@NgModule({
    imports: [AboutRoutingModule],
    declarations: [AboutComponent],
    exports: [AboutRoutingModule],
    providers: []
})
export class AboutModule {

}
