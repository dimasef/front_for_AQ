/**
 * Created by Администратор on 22.11.2016.
 */
import {Component, Input} from "@angular/core";
@Component({
  moduleId: module.id,
  selector: "question-notification",
  templateUrl: "question-notification.component.html",
  styleUrls: [ "question-notification.component.css", "./../notification.component.css"]
})

export class QuestionNotificationComponent{
  @Input()
  notification
}
