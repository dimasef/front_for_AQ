import {NgModule} from "@angular/core"

import {AdminComponent} from "./admin.component";
import {FormsModule} from "@angular/forms"
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminCategoriesComponent} from "./categories/admin.categories.component";
import {AdminQuestionsComponent} from "./questions/admin.questions.comonent";
@NgModule({
  imports:[
    AdminRoutingModule,
    FormsModule
  ],
  declarations:[
    AdminCategoriesComponent,
    AdminQuestionsComponent,
    AdminComponent,
  ],
  exports:[
    AdminRoutingModule
    //AdminComponent
  ]
})
export class AdminModule{

}
