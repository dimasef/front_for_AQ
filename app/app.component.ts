import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {MenuItem} from "primeng/primeng";
import {Location} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private location: Location){
  }
  ngOnInit():void {
    this.items = [
      {label: 'Home', icon: 'fa-bar-chart', routerLink:["home"]},
      {label: 'Questions', icon: 'fa-calendar', routerLink: ["questions"]},
      {label: 'Categories', icon: 'fa-book', routerLink: ["categories"]},
      {label: 'About', icon: 'fa-support', routerLink: ["about"]},
      {label: 'Admin', icon: 'fa-twitter', routerLink: ["admin"]},
      {label: 'Auth', icon: 'fa-twitter', routerLink:["auth"]}
    ];
    var url = this.location.path().substr(1)

    this.activeItem = this.items.find(item=>url.startsWith(item.routerLink.join("/")))


  }
  activeItem: MenuItem;
  items :MenuItem[];
  title = 'App';
}
