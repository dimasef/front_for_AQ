import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Service} from "./Service";
import {MessageService} from "./message.service";
import {Question} from "../entity/Question";


@Injectable()
export class QuestionService extends Service{
  constructor(http:Http, messagesService:MessageService){
    super(http, messagesService)
    this.url = "questions";
  }
  cast(value){
    return new Question(value)
  }
}
