import { Component, Input } from '@angular/core';
import {OnInit} from "@angular/core";
import {User} from "../User";

@Component({
    moduleId: module.id,
    selector: 'sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User;
  ngOnInit():void {
    this.user = new User()
  }
    title = "Title"
}
