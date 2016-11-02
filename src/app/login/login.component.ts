import { Component, OnInit } from '@angular/core';
import {Faculty} from "../model/faculty";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {FacultyService} from "../shared/faculty.service";
import {User} from "../model/user";
import {University} from "../model/university";
import {Greetings} from "../model/greetings";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string;
  errorUniversitiesMsg: string;
  errorUserMsg: string;



  faculties: Faculty[];
  universities: University[];

  user: User;
  greetings: Greetings;
  greetingsPost: Greetings;

  mode = 'Observable';

  title = "Login page";


  showMsg() {
    console.log(this.faculties);
  }

  constructor(private service: FacultyService) {
  }

  ngOnInit() {
    // this.getFaculties();
    // this.getUniversities();

    this.getGreetingsG();
    this.getGreetings();
  }

  getGreetings() {
    this.service.getGreetings()
      .subscribe(
        greetings => {
          this.greetingsPost = <Greetings>greetings;
          console.log("Greetings (post) msg: " + this.greetingsPost.greetings);
        });
  }

  getGreetingsG() {
    this.service.getGreetingsG()
      .subscribe(
        greetings => {
          this.greetings = <Greetings>greetings;
          console.log("Greetings msg: " + this.greetings.greetings);
        }
      );
  }

  getFaculties() {
    this.service.getFaculties()
      .subscribe(
        faculties => this.faculties = faculties);
        // error =>  this.errorMsg = <any>error);
  }

  getUniversities() {
    this.service.getUniversities()
      .subscribe(
        universities => this.universities = universities,
        error =>  {
          this.errorUniversitiesMsg = <any>error;
        });
  }

  performLogin() {
    this.service.login()
      .subscribe(
        user => this.user = user,
        error =>  this.errorUserMsg = <any>error);
  }

}
