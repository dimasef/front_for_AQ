import { Component, Input } from '@angular/core';
import {SpecialityService} from "./speciality.service";
import {TreeItemAddComponent} from "../tree-item-add/tree-item-add.component";
import {UniversityService} from "../university/university.service";
@Component({
  moduleId: module.id,
  selector: 'add-speciality',
  templateUrl: './../tree-item-add/tree-item-add.component.html',
  styleUrls: ['./../../admin.component.css']
})
export class AddSpecialityComponent extends TreeItemAddComponent{
  title = "Add Speciality"
  constructor(
    service: SpecialityService){
    super(service)
  }
  get nodeType(){
    return "speciality"
  }

}
