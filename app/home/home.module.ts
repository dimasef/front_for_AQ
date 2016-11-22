import {NgModule} from "@angular/core"
import {HomeRoutingModule} from "./home-routing.module"
import {HomeComponent} from "./home.component";
import {ProfileModule} from "../profile/profile.module";
@NgModule({
    imports: [HomeRoutingModule, ProfileModule],
    declarations: [HomeComponent],
    exports: [ProfileModule],
    providers: []
})
export class HomeModule {

}
