import { Component, Input, Output } from '@angular/core';
import {Faculty} from "./Faculty";
import {TreeItemComponent} from "../tree-item/tree-item.component";
import {FacultyService} from "./faculty.service";
@Component({
  moduleId: module.id,
  selector: 'faculty',
  templateUrl: 'faculty.component.html',
  styleUrls: ['./../../admin.component.css']
})
export class FacultyComponent extends TreeItemComponent{
  title = "Faculty"
  constructor(service:FacultyService){
    super(service)
  }
}

