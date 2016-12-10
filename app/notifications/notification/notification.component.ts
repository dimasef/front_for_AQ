import {Component, Input} from "@angular/core";
/**
 * Created by Администратор on 22.11.2016.
 */

@Component({
  moduleId: module.id,
  selector: "notification",
  templateUrl: "notification.component.html",
  styleUrls: ["notification.component.css"]
})
export class NotificationComponent{
  @Input()
  notification
}
