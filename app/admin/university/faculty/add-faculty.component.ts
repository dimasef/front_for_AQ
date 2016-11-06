import { Component, Input } from '@angular/core';
import {FacultyService} from "./faculty.service";
import {TreeItemAddComponent} from "../tree-item-add/tree-item-add.component";
import {UniversityService} from "../university/university.service";
@Component({
  moduleId: module.id,
  selector: 'add-faculty',
  templateUrl: './../tree-item-add/tree-item-add.component.html',
  styleUrls: ['./../../admin.component.css']
})
export class AddFacultyComponent extends TreeItemAddComponent{
  title = "Add Faculty"
  constructor(service:FacultyService){
  super(service)
  }
  get nodeType(){
    return "faculty"
  }

}
