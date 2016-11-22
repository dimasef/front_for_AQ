import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {NotificationsComponent} from "./notifications/notifications.component";


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
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }


