/**
 * Created by Alexandr on 08.11.2016.
 */

import {Injectable, OnInit} from "@angular/core";
import {Service} from "../admin/Service";
import {Http} from "@angular/http";
import {Question} from "../models/Question";
import {Observable} from "rxjs";

@Injectable()
export class QuestionService extends Service implements OnInit {

  private BASE_NAME: string = "http://localhost:8080/rest/";

  ngOnInit(): void {

  }

  constructor(http: Http) {
    super(http);

    this.url = this.BASE_NAME + "questions";
  }

  public getQuestions(): Observable<Question[]> {
    return super.get();
  }

}
