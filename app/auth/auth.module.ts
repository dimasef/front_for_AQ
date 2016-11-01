import {NgModule} from "@angular/core"
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {LogInComponent} from "./log_in/log-in.component";
import {SignUpComponent} from "./sign_up/sign-up.component";
import {FormsModule} from "@angular/forms";
import {UiLibModule} from "../ui-lib.module";
import {AuthService} from "./auth.servise";

@NgModule({
    imports: [AuthRoutingModule, BrowserModule, FormsModule, UiLibModule,
    ],
    declarations: [AuthComponent, LogInComponent, SignUpComponent],
    exports: [AuthRoutingModule],
    providers: [AuthService]
})
export class AuthModule {

}
