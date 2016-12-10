import {Component, Input, OnInit} from "@angular/core";

import {NotificationsService} from "../service/notifications.service";

@Component({
  moduleId: module.id,
  selector: "notifications",
  template:`<md-card class="root">
    <div *ngFor="let value of data" >
    <notification *ngIf="value.content" [notification]="value"></notification>
    <question-notification *ngIf="value.question" [notification]="value"></question-notification>
</div>
  </md-card>`,
  styleUrls: ["notifications.component.css"]
})
export class NotificationsComponent implements OnInit{
  constructor(private service: NotificationsService){}
  ngOnInit():void {
    this.service.get()
      .subscribe(data=> this.data = data)
  }
  //tsIgnore
  data:any[]
}
