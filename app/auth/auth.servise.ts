import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {User} from "./User";
import {Http} from "@angular/http";
import { Headers, RequestOptions , RequestMethod, Request} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';


@Injectable()
export class AuthService {
  loginUrl = "http://localhost:8080/rest/open"
  constructor(private http: Http, private cookieService:CookieService){}
  logIn(user:User, rememberMe:boolean){
    let csrf = this.cookieService.get("CSRF-TOKEN")
    let headers = new Headers({
      "X-CSRF-TOKEN": csrf
    })
    let options = {
      headers,
      withCredentials: true
    }
    return this.http.post(this.loginUrl, user, options)
      .map((res:any)=>{debugger; return res.json()})
      .catch((res:any)=>res.json())
  }
  signUp(user:User){

  }
}
