import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {AskQuestionComponent} from "./ask-question/ask-question.component";


const routes:Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ask',
    component: AskQuestionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


