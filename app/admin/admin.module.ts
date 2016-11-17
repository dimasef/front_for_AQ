import {NgModule} from "@angular/core"

import {AdminComponent} from "./admin.component";
import {FormsModule} from "@angular/forms"
import {AdminRoutingModule} from "./admin-routing.module";
import {UniversityService} from "../service/university.service";
import {UiLibModule} from "../ui-lib.module";
import {FacultyService} from "../service/faculty.service";
import {BrowserModule} from "@angular/platform-browser";
import {SpecialityService} from "../service/speciality.service";
import {UniversityTableComponent} from "./tables/university/university.table.component";
import {FacultyTableComponent} from "./tables/faculty/faculty.table.component";
import {SpecialityTableComponent} from "./tables/speciality/speciality.table.component";
import {UniversitySelectComponent} from "./tables/university/university.select.component";
import {FacultySelectComponent} from "./tables/faculty/faculty.select.component";
import {SpecialitySelectComponent} from "./tables/speciality/speciality.select.component";
import {QuestionService} from "../service/question.service";
import {QuestionTableComponent} from "./tables/question/question.table.component";
import {AnswerQuestionService} from "../service/answer-question.service";
import {AnswerTableComponent} from "./tables/answer/answer.table.component";
;
@NgModule({
  imports:[
    AdminRoutingModule,
    FormsModule,
    UiLibModule,
    BrowserModule
  ],
  declarations:[
    AdminComponent,
    UniversityTableComponent,
    FacultyTableComponent,
    SpecialityTableComponent,
    UniversitySelectComponent,
    FacultySelectComponent,
    SpecialitySelectComponent,
    QuestionTableComponent,
    AnswerTableComponent
  ],
  exports:[
    AdminRoutingModule
    //AdminComponent
  ],
  providers:[
    UniversityService,
    FacultyService,
    SpecialityService,
    QuestionService,
  ]
})
export class AdminModule{

}
