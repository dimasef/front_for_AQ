import {NgModule} from "@angular/core"
import {TabMenuModule, MenuModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';

@NgModule({
    imports: [TabMenuModule, MenuModule, InputTextModule, ButtonModule, CheckboxModule],
    declarations: [],
    exports: [TabMenuModule, MenuModule, InputTextModule, ButtonModule, CheckboxModule],
    providers: []
})
export class UiLibModule {

}
