import { Component, Input, OnInit } from '@angular/core';
import {Question} from "../../entity/Question";
import {QuestionService} from "../../service/question.service";
import {UserService} from "../../service/user.service";
import {MessageService} from "../../service/message.service";
/* tslint:disable */
@Component({
    moduleId: module.id,
    selector: 'ask-question',
    templateUrl: 'ask-question.component.html',
    styleUrls: ["ask-question.component.css"]
})
export class AskQuestionComponent implements OnInit{
  ngOnInit():void {
    this.question = new Question({})
  }
  constructor(private questionService:QuestionService,
              private userService:UserService,
              private messageService:MessageService){}
  question:Question;
  showDetails= false
  post(){
    this.question.user = this.userService.getCurrent()
    this.questionService.post(this.question)
      .subscribe(data=>{
        this.messageService.message("Your question posted!")
        this.question = new Question({})
        this.showDetails = false
      })
  }
}
