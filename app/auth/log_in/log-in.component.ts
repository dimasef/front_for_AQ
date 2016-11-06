import { Component, Input } from '@angular/core';
import {OnInit} from "@angular/core";
import {User} from "../../models/User";
import {AuthService} from "../auth.servise";

@Component({
    moduleId: module.id,
    selector: 'log-in',
    templateUrl: 'log-in.component.html',
    styleUrls: ['log-in.component.css']
})
export class LogInComponent implements OnInit{

  user:User;
  rememberMe:boolean;
  status:string
  constructor(private authService:AuthService){}
  ngOnInit():void {
    this.user = new User()
    this.user.email = "username"
    this.user.password = "password"
    this.authService.getRequest().subscribe(r=>r)
  }
  logIn(){
    console.log(this.user, "login", this.rememberMe?"remember":"no remember")
    this.authService.logIn(this.user, this.rememberMe)
      .subscribe(
        user=> {debugger; return this.status = JSON.stringify(user)},
        error=>this.status = JSON.stringify(error)
      )
  }
}
