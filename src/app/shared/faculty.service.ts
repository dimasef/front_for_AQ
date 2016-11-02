/**
 * Created by alexandr on 01.11.16.
 */

import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Faculty }           from '../model/faculty';
import { Observable }     from 'rxjs/Observable';
import {User} from "../model/user";
import {University} from "../model/university";
import {Greetings} from "../model/greetings";

@Injectable()
export class FacultyService {

  private greetingsUrl = 'http://localhost:8080/rest/open';
  private facultiesUrl = 'http://localhost:8080/rest/faculties';  // URL to web API
  private universitiesUrl = 'http://localhost:8080/rest/universities';
  private loginUrl = 'http://localhost:8080/rest/login';
  private user: User = {
    "email" : "abc@mail.ru",
    "password" : "123456789",
    "passwordConfirm" : "123456789"
  };

  constructor(private http:Http) {
  }

  login(): Observable<User> {
    let body = JSON.stringify({ email: "abc@mail.ru", password: "123456789", passwordConfirm: "123456789"});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginUrl, body, options)
      .map(this.extractUserData)
      .catch(this.handleError);
  }

  // Methods using the http object
  getFaculties(): Observable<Faculty[]> {
    return this.http.get(this.facultiesUrl)
      .map(this.extractData);
  }

  getGreetingsG(): Observable<Greetings> {
    return this.http.get(this.greetingsUrl)
      .map(data => {
        console.log("Raw data from service:" + <Greetings>data.json());
        return <Greetings>data.json();
      });
  }

  getGreetings(): Observable<Greetings> {
    let body = JSON.stringify({ email: "abc@mail.ru", password: "123456789", passwordConfirm: "123456789"});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.greetingsUrl, body, options)
      .map(data => {
        console.log("Raw post data from service:" + <Greetings>data.json());
        return <Greetings>data.json();
      });
  }

  getUniversities(): Observable<University[]> {
    return this.http.get(this.universitiesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    // console.log("Body: " + body);
    // console.log("Body data: " + body.data);
    // console.log("Facs: " + this.facs);
    // console.log("Res: " + res);
    // console.log("Res text: " + res.text());
    // console.log("Res json: " + res.json());
    // return body.data || { };
    return body;
  }

  private extractDataOld(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private extractUserData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
