import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {QuestionsComponent} from "./questions/questions.component";
import {CategoriesComponent} from "./categories/categories.component";
import {AnswersComponent} from "./answers/answers.component";


const routes= [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [{
      path: "",
      redirectTo: "notifications"
    },{
      path: "notifications",
      component: NotificationsComponent
    }, {
      path: "questions",
      component: QuestionsComponent
    }, {
      path: "categories",
      component: CategoriesComponent
    }, {
      path: "answers",
      component: AnswersComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(<Routes>routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }


