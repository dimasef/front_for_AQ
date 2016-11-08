import {NgModule} from "@angular/core"

import {AdminComponent} from "./admin.component";
import {FormsModule} from "@angular/forms"
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminCategoriesComponent} from "./categories/admin.categories.component";
import {AdminQuestionsComponent} from "./questions/admin.questions.comonent";
import {UniversityService} from "./university/university/university.service";
import {AdminUniversityListComponent} from "./university/admin.university.list.component";
import {UiLibModule} from "../ui-lib.module";
import {UniversityComponent} from "./university/university/university.component";
import {FacultyComponent} from "./university/faculty/faculty.component";
import {FacultyService} from "./university/faculty/faculty.service";
import {BrowserModule} from "@angular/platform-browser";
import {SpecialityComponent} from "./university/speciality/speciality.component";
import {SpecialityService} from "./university/speciality/speciality.service";
import {AddUniversityComponent} from "./university/university/add-university.component";
import {AddSpecialityComponent} from "./university/speciality/add-specislity.component";
import {AddFacultyComponent} from "./university/faculty/add-faculty.component";
import {AdminUniversitySelectComponent} from "./university/univercity-select/admin.university-select.component";
import {UniversitySelectComponent} from "./university/univercity-select/university-select.component";
import {FacultySelectComponent} from "./university/univercity-select/faculty-select.component";
import {SpecialitySelectComponent} from "./university/univercity-select/speciality-select.component";
@NgModule({
  imports:[
    AdminRoutingModule,
    FormsModule,
    UiLibModule,
    BrowserModule
  ],
  declarations:[
    AdminCategoriesComponent,
    AdminQuestionsComponent,
    AdminComponent,
    AdminUniversityListComponent,
    UniversityComponent,
    FacultyComponent,
    SpecialityComponent,
    AddUniversityComponent,
    AddSpecialityComponent,
    AddFacultyComponent,
    AdminUniversitySelectComponent,
    UniversitySelectComponent,FacultySelectComponent,SpecialitySelectComponent
  ],
  exports:[
    AdminRoutingModule
    //AdminComponent
  ],
  providers:[
    UniversityService,
    FacultyService,
    SpecialityService
  ]
})
export class AdminModule{

}
