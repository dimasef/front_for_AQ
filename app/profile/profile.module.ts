import {NgModule} from "@angular/core"
import {ProfileComponent} from "./profile.component";
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileService} from "./profile.service";
import {UiLibModule} from "../ui-lib.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NotificationsComponent} from "../notifications/notifications.component"
import {MessageService} from "../service/message.service";
import {MenuItem} from "primeng/components/common/api";
import {QuestionsComponent} from "./questions/questions.component";
import {AnswersComponent} from "./answers/answers.component";
import {CategoriesComponent} from "./categories/categories.component";
import {NotificationsModule} from "../notifications/notifications.module";


@NgModule({
    imports: [ProfileRoutingModule, UiLibModule, BrowserModule, FormsModule, NotificationsModule],
    declarations: [
      ProfileComponent,
      QuestionsComponent,
      AnswersComponent,
      CategoriesComponent
    ],
    exports: [ProfileRoutingModule, ProfileComponent],
    providers: [ProfileService]
})
export class ProfileModule {

}
