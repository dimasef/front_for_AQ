import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionsComponent} from "./questions.component";


const routes= [
  {
    path: 'questions',
    component: QuestionsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }


