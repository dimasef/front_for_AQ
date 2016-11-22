import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {MenuItem} from "primeng/primeng";
import {Location} from '@angular/common';
import {MessageService} from "./service/message.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private location: Location, private messagesService:MessageService){
  }
  ngOnInit():void {
    this.items = [
      {label: 'Home', icon: 'fa-bar-chart', routerLink:["home"]},
      {label: 'About', icon: 'fa-support', routerLink: ["about"]},
      {label: 'Admin', icon: 'fa-twitter', routerLink: ["admin"]},
      {label: 'Auth', icon: 'fa-twitter', routerLink:["auth"]},
      {label: 'Profile', icon: 'fa-book', routerLink: ["profile"]}
    ];
    var url = this.location.path().substr(1)

    this.activeItem = this.items.find(item=>url.startsWith(item.routerLink.join("/")))
  }
  get messages(){
    return this.messagesService.messages
  }
  set messages(value:any){}
  activeItem: MenuItem;
  items :MenuItem[];
  title = 'App';
}
