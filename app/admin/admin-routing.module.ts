import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminQuestionsComponent} from "./questions/admin.questions.comonent";
import {AdminCategoriesComponent} from "./categories/admin.categories.component";
import {AdminUniversityListComponent} from "./university/admin.university.list.component";


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: "university",
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
        path: 'university',
        component: AdminUniversityListComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(<Routes>routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


