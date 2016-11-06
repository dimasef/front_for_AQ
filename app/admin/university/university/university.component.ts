import { Component, Input } from '@angular/core';
import {University} from "./University";
import {Output} from "@angular/core";
import {TreeItemComponent} from "../tree-item/tree-item.component";
import {UniversityService} from "./university.service";
@Component({
  moduleId: module.id,
  selector: 'university',
  templateUrl: 'university.component.html',
  styleUrls: ['./../../admin.component.css']
})
export class UniversityComponent extends TreeItemComponent{
  title = "University"
  constructor(service:UniversityService){
    super(service)
  }
}

