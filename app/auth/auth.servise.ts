import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {User} from "./User";
import {Http} from "@angular/http";
import { Headers, RequestOptions , RequestMethod, Request} from '@angular/http';


@Injectable()
export class AuthService {
  loginUrl = "http://localhost:1234/rest/login"
  constructor(private http: Http){}
  logIn(user:User, rememberMe:boolean){

    return this.http.post(this.loginUrl, user)
      .map((res:any)=>{debugger; return res.json()})
  }
  signUp(user:User){

  }
}
