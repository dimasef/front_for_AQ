import { Component, Input } from '@angular/core';
import {Location} from '@angular/common';
import {MenuItem} from "primeng/components/common/api";
import {MessageService} from "../service/message.service";

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ["profile.component.css"]
})
export class ProfileComponent {
    user = {
      firstName: "First Name",
      lastName: "Last Name",
      email: "email@email.com",
      university: {
        name: "My university"
      },
      faculty: {
        name: "My faculty"
      },
      speciality: {
        name: "My speciality"
      },
      avatar: "https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg",
      correctAnswersCount: 4
    }
    questions = [1,2,3,4,5,6,7].map(i=>({
      title: "title "+i,
      comment: "comment "+i,
      get content(){return this.comment},
      answer: {
        content: "answer for question 1"
      }
    }))
    answers = [1,2,3,4,5,6,7].map(i=>({
      title: "Answer for question",
      content: "answer content "+i,
      isCorrect: i%2
    }))

  constructor(private location: Location, private messagesService:MessageService){
  }
  ngOnInit():void {
    this.items = [
      {label: 'Notifications', icon: 'fa-bar-chart', routerLink:["profile", "notifications"]},
      {label: 'Questions', icon: 'fa-calendar', routerLink: ["profile", "questions"]},
      {label: 'Categories', icon: 'fa-book', routerLink: ["profile", "categories"]},
      {label: 'Answers', icon: 'fa-support', routerLink: ["profile", "answers"]},
    ];
    var url = this.location.path().substr(1)

    this.activeItem = this.items.find(item=>url.startsWith(item.routerLink.join("/")))
  }
  activeItem: MenuItem;
  items :MenuItem[];
  title = 'App';
}
