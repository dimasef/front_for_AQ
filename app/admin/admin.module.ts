import {NgModule} from "@angular/core"

import {AdminComponent} from "./admin.component";
import {FormsModule} from "@angular/forms"
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminCategoriesComponent} from "./categories/admin.categories.component";
import {AdminQuestionsComponent} from "./questions/admin.questions.comonent";
import {UniversityService} from "./tables/university/university.service";
import {UiLibModule} from "../ui-lib.module";
import {FacultyService} from "./tables/faculty/faculty.service";
import {BrowserModule} from "@angular/platform-browser";
import {SpecialityService} from "./tables/speciality/speciality.service";
import {UniversityTableComponent} from "./tables/university/university.table.component";
import {FacultyTableComponent} from "./tables/faculty/faculty.table.component";
import {SpecialityTableComponent} from "./tables/speciality/speciality.table.component";
import {UniversitySelectComponent} from "./tables/university/university.select.component";
import {FacultySelectComponent} from "./tables/faculty/faculty.select.component";
import {SpecialitySelectComponent} from "./tables/speciality/speciality.select.component";
;
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
    UniversityTableComponent,
    FacultyTableComponent,
    SpecialityTableComponent,
    UniversitySelectComponent,
    FacultySelectComponent,
    SpecialitySelectComponent
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
