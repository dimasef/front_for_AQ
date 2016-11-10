import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminQuestionsComponent} from "./questions/admin.questions.comonent";
import {AdminCategoriesComponent} from "./categories/admin.categories.component";
import {UniversityTableComponent} from "./tables/university/university.table.component";
import {FacultyTableComponent} from "./tables/faculty/faculty.table.component";
import {SpecialityTableComponent} from "./tables/speciality/speciality.table.component";


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: "universities",
      },
      {
        path: 'questions',
        component: AdminQuestionsComponent
      },
      {
        path: 'categories',
        component: AdminCategoriesComponent
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
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(<Routes>routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


