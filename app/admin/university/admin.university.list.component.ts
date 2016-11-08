
import { Component, Input } from '@angular/core';
import {UniversityService} from "./university/university.service";
import {OnInit} from "@angular/core";
import {University} from "./university/University";
import {TreeNode} from 'primeng/primeng';
import {FacultyService} from "./faculty/faculty.service";
import {Faculty} from "./faculty/Faculty";
import {SpecialityService} from "./speciality/speciality.service";
import {Speciality} from "./speciality/Speciality";

@Component({
    moduleId: module.id,
    selector: 'admin-university-list',
    templateUrl: 'admin.university.list.component.html',
    styleUrls: ['admin.university.list.component.css']
})
export class AdminUniversityListComponent implements OnInit{
  universities:University[];
  isHorizontal:boolean = false
  selectedNode:Object
  data: TreeNode[]
  ngOnInit():void {
    this.loadData()
  }
  universityToNode(university:University){
      let _university = {
        data: university,
        "collapsedIcon": "fa-graduation-cap",
        _type: "university",
        get label(){return this.data.name},
        children: [{}],
        parent: {}
      }
      _university.children =  university.faculties? university.faculties.map((faculty:Faculty)=>{
        let _faculty = {
          data: faculty,
          parent: _university,
          get label(){return this.data.name},
          "collapsedIcon": "fa-graduation-cap",
          _type: "faculty",
          children: [{}]
        }
        _faculty.children = faculty.specialities?faculty.specialities.map((speciality:Speciality)=>{
              return {
                data: speciality,
                parent: _faculty,
                get label(){return this.data.name},
                "collapsedIcon": "fa-graduation-cap",
                _type: "speciality"
              }
            }):[]
        return _faculty
        }):[]
      return _university
      }

  loadData(){
    this.universityService
      .get()
      .subscribe((res:University[])=>{
        this.universities = res
        this.data = this.universities.map(this.universityToNode.bind(this))
        let parent = {children: this.data};
        this.data.forEach((u:any)=>{
          u.parent = parent
        })
      })
  }
  constructor(
    private universityService:UniversityService
    ){}
  loadNode(event:any){

  }
  prevNode:any = {}
  nodeSelect(event:any){
    //noinspection TypeScriptUnresolvedVariable
    delete this.prevNode.type;
    this.prevNode = event.node
    event.node.type = event.node._type
  }
  nodeUnselect(event:any){
    delete event.node.type
  }
  method(){
    /*if (event.node){
     switch (event.node.type){
     case "university":
     this.facultyService.get()
     .subscribe((facs:Faculty[])=>{
     event.node.children = facs.map(f=>{
     return {
     type: "faculty",
     data: f,
     "collapsedIcon": "fa-graduation-cap",
     leaf: false
     }
     })
     })
     break
     case "faculty":
     this.specialityService.get()
     .subscribe((specs:any)=>{
     event.node.children = specs.map(s=>{
     return {
     type: "speciality",
     data: s,
     "collapsedIcon": "fa-graduation-cap",
     }
     })
     })
     }
     }*/
  }
}

