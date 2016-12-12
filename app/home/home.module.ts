import {NgModule} from "@angular/core"
import {HomeRoutingModule} from "./home-routing.module"
import {HomeComponent} from "./home.component";
import {ProfileModule} from "../profile/profile.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {UiLibModule} from "../ui-lib.module";
import {AskQuestionComponent} from "./ask-question/ask-question.component";
import {FeedComponent} from "./feed/feed.component";
import {NotificationsModule} from "../notifications/notifications.module";
import {CategorySelectComponent} from "./category-select/category-select.component";

@NgModule({
    imports: [HomeRoutingModule, ProfileModule, BrowserModule, FormsModule, UiLibModule, NotificationsModule],
    declarations: [HomeComponent, AskQuestionComponent, FeedComponent, CategorySelectComponent],
    exports: [ProfileModule],
    providers: []
})
export class HomeModule {

}
