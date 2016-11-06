import {NgModule} from "@angular/core"
import {ProfileComponent} from "./profile.component";
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileService} from "./profile.service";


@NgModule({
    imports: [ProfileRoutingModule],
    declarations: [ProfileComponent],
    exports: [ProfileRoutingModule],
    providers: [ProfileService]
})
export class ProfileModule {

}
