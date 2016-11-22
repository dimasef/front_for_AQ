import {TableComponent} from "../table.component";
import {Component} from "@angular/core";
import {Question} from "../../../entity/Question";
import {QuestionService} from "../../../service/question.service";
@Component({
  moduleId: module.id,
  selector: "question-table",
  templateUrl: "question.table.component.html",
  styleUrls: ["./../../admin.component.css"]
})
export class QuestionTableComponent extends TableComponent{
  constructor(service:QuestionService){
    super(service)
  }
  clone(data){
    //noinspection TypeScriptValidateTypes
    return new Question(data)
  }
  setUser(event){
    this.current.user = event
  }
}
