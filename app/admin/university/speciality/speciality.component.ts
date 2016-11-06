import { Component, Input } from '@angular/core';
import {TreeItemComponent} from "../tree-item/tree-item.component";
import {SpecialityService} from "./speciality.service";

@Component({
    moduleId: module.id,
    selector: 'speciality',
    templateUrl: './../tree-item/tree-item.component.html',
    styleUrls: ['./../../admin.component.css']
})
export class SpecialityComponent extends TreeItemComponent{
  title = "Speciality"
  constructor(service:SpecialityService){
    super(service)
  }
}
