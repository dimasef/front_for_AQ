import { Component, Input , Output, EventEmitter} from '@angular/core';
import {UniversityService} from "./university.service";
import {TreeItemAddComponent} from "../tree-item-add/tree-item-add.component";

@Component({
  moduleId: module.id,
  selector: 'add-university',
  templateUrl: './../tree-item-add/tree-item-add.component.html',
  styleUrls: ['./../../admin.component.css']
})
export class AddUniversityComponent extends TreeItemAddComponent{
  title = "Add University"

  constructor(service: UniversityService){
    super(service)
  }

  get nodeType(){
    return "university"
  }

}
