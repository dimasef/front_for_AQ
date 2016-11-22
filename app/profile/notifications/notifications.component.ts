import {Component, Input} from "@angular/core";
/**
 * Created by Администратор on 22.11.2016.
 */
@Component({
  moduleId: module.id,
  selector: "notifications",
  template:`<div class='ui-g'>
    <div *ngFor="let value of data" class=" ui-g-12 ui-md-6 ui-lg-4">
    <notification *ngIf="value.content" [notification]="value"></notification>
    <question-notification *ngIf="value.question" [notification]="value"></question-notification>
</div>
  </div>`
})
export class NotificationsComponent{
  data =  [1,2,3,4,5,6,7].map(i=>({
    title: "Notification about something",
    content: "notification "+i,
    question:null,
    answer: null
  })).concat([{
    title: "Some answered yout question",
    content: "",
    question:{
      title: "Question 1"
    },
    answer: {
      content: "Answer 1"
    }
  },
    {
      title: "Some answered yout question",
      content: "",
      question:{
        title: "Question 1"
      },
      answer: {
        content: "Answer 1"
      }
    },
    {
      title: "Some answered yout question",
      content: "",
      question:{
        title: "Question 1"
      },
      answer: {
        content: "Answer 1"
      }
    }]).concat([1,2,3,4,5,6,7].map(i=>({
    title: "Notification about something",
    content: "notification "+i,
    question:null,
    answer: null
  })))
}
