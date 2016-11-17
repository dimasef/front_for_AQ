import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {UniversityTableComponent} from "./tables/university/university.table.component";
import {FacultyTableComponent} from "./tables/faculty/faculty.table.component";
import {SpecialityTableComponent} from "./tables/speciality/speciality.table.component";
import {QuestionTableComponent} from "./tables/question/question.table.component";


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: "questions",
      },
      {
        path: 'universities',
        component: UniversityTableComponent
      },
      {
        path: 'faculties',
        component: FacultyTableComponent
      },
      {
        path: 'specialities',
        component: SpecialityTableComponent
      },
      {
        path: 'questions',
        component: QuestionTableComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(<Routes>routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


