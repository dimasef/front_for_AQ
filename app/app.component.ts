import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {Location} from '@angular/common';
import {MessageService} from "./service/message.service";
import {NotificationsService} from "./service/notifications.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
  unreadCount:number;
  constructor(
    private messagesService:MessageService,
    private notificationsService: NotificationsService){
  }
  ngOnInit():void {
    this.items = [
      {label: 'Home', icon: 'fa-bar-chart', link:"/home"},
      {label: 'About', icon: 'fa-support', link:"/about"},
      {label: 'Admin', icon: 'fa-twitter', link:"/admin"},
      {label: 'Profile', icon: 'fa-book', link:"profile"},
      {label: 'Ask the question', icon: 'fa-book', link: "/ask"}
    ];
    this.notificationsService.getUnreadCount()
      .subscribe(count=>this.unreadCount = count)
  }
  get messages(){
    return this.messagesService.messages
  }
  set messages(value:any){}
  items :any;
  title = 'App';
  email = ""
  actualPassword = ""
  get password(){
    return this.actualPassword.replace(new RegExp(".", "g"), "*")
  }
  set password(val){
    this.actualPassword = val
  }
}
