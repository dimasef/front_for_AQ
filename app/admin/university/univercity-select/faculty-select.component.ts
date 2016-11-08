import { Component, Input } from '@angular/core';
import {ItemSelectComponent} from "./item-select.component";

@Component({
    moduleId: module.id,
    selector: 'faculty-select',
    templateUrl: 'faculty-select.component.html'
})
export class FacultySelectComponent extends ItemSelectComponent{
}
