import {NgModule} from "@angular/core"
import {QuestionsComponent} from "./profile.component.ts";
import {QuestionsRoutingModule} from "./profile-routing.module.ts";


@NgModule({
    imports: [QuestionsRoutingModule],
    declarations: [QuestionsComponent],
    exports: [QuestionsRoutingModule],
    providers: []
})
export class QuestionsModule {

}
