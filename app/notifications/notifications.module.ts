import {NgModule} from "@angular/core"
import {NotificationComponent} from "./notification/notification.component";
import {NotificationsComponent} from "./notifications.component";
import {QuestionNotificationComponent} from "./notification/question-notification/question-notification.component";
import {NotificationsService} from "../service/notifications.service";
import {UiLibModule} from "../ui-lib.module";


@NgModule({
    imports: [UiLibModule],
    declarations: [NotificationComponent, NotificationsComponent, QuestionNotificationComponent],
    exports: [NotificationComponent, NotificationsComponent, QuestionNotificationComponent],
    providers: [NotificationsService]
})
export class NotificationsModule {

}
