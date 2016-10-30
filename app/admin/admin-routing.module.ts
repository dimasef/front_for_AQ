import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminQuestionsComponent} from "./questions/admin.questions.comonent";
import {AdminCategoriesComponent} from "./categories/admin.categories.component";


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
        path: 'questions',
        component: AdminQuestionsComponent
      },
      {
        path: 'categories',
        component: AdminCategoriesComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


