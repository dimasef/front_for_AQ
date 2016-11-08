import { Component, Input } from '@angular/core';
import {ItemSelectComponent} from "./item-select.component";

@Component({
    moduleId: module.id,
    selector: 'speciality-select',
    templateUrl: 'speciality-select.component.html'
})
export class SpecialitySelectComponent extends ItemSelectComponent{
}
