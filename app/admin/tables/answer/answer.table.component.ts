import {TableComponent} from "../table.component";
import {Component, Input} from "@angular/core";
import {AnswerQuestionService} from "../../../service/answer-question.service";
import {Answer} from "../../../entity/Answer";
import {Question} from "../../../entity/Question";
import {Http} from "@angular/http";
import {MessageService} from "../../../service/message.service";
@Component({
  moduleId: module.id,
  selector: "answer-table",
  templateUrl: "answer.table.component.html",
  styleUrls: ["./../../admin.component.css"]
})
export class AnswerTableComponent extends TableComponent{
  @Input()
  question:Question
  constructor(http:Http, messageService:MessageService){
    super(new AnswerQuestionService(http, messageService, this))
  }
  clone(data){
    //noinspection TypeScriptValidateTypes
    return new Answer(data)
  }
}
