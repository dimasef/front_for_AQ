import {NgModule} from "@angular/core"
import {HomeRoutingModule} from "./home-routing.module"
import {HomeComponent} from "./home.component";
import {ProfileModule} from "../profile/profile.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
@NgModule({
    imports: [HomeRoutingModule, ProfileModule, BrowserModule, FormsModule],
    declarations: [HomeComponent],
    exports: [ProfileModule],
    providers: []
})
export class HomeModule {

}
