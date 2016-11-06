import { Component, Input } from '@angular/core';
import {UniversityService} from "./university.service";
import {OnInit} from "@angular/core";
import {University} from "./University";
import {TreeNode} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'admin-university-list',
    templateUrl: 'admin.university.list.component.html',
    styleUrls: ['admin.university.list.component.css']
})
export class AdminUniversityListComponent implements OnInit{
  universities:University[];
  ngOnInit():void {
    this.universityService
      .get()
      .subscribe((res:University[])=>this.universities = res)
  }
  constructor(private universityService:UniversityService){

  }
}
