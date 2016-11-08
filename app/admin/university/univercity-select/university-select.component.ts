import { Component, Input } from '@angular/core';
import {ItemSelectComponent} from "./item-select.component";

@Component({
    moduleId: module.id,
    selector: 'university-select',
    templateUrl: 'university-select.component.html'
})
export class UniversitySelectComponent extends ItemSelectComponent{
}
