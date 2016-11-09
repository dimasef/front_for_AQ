import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {Question} from "../../models/Question";
import {Observable} from "rxjs";

@Component({
    moduleId: module.id,
    selector: 'admin-questions',
    template: `
      <ul *ngIf="questions">
        <li>{{title}}</li>
      </ul>
    `,
    providers: [QuestionService],
})
export class AdminQuestionsComponent implements OnInit {

  constructor(private service: QuestionService) {

  }

  ngOnInit(): void {
    this.getQuestions();
  }
    title = "Ques"

  questions: Observable<Question[]>;

  getQuestions(): void {
    this.questions = <Observable<Question[]>> this.service.getQuestions();
  }
}
