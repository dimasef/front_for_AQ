import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Service} from "./Service";
import {MessageService} from "./message.service";
import {Question} from "../entity/Question";


@Injectable()
export class AnswerQuestionService extends Service{
  constructor(http:Http, messagesService:MessageService,
              private component:any){
    super(http, messagesService)
    this.url = "answers";
  }
  get question(){
    return this.component.question
  }
  cast(value){
    return new Question(value) || {name:"Error"}
  }
  get(){
    return Observable.of(this.question.answers)
  }
  post(data:any){
    debugger
    data.question = {id: this.question.id}
    return super.post(data)
  }
}
