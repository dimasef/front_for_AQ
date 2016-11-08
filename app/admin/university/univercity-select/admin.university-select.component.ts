import { Component, Input } from '@angular/core';
import {University} from "../university/University";
import {UniversityService} from "../university/university.service";
import {Speciality} from "../speciality/Speciality";
import {Faculty} from "../faculty/Faculty";
import {OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'AdminUniversitySelect',
    templateUrl: 'admin.university-select.component.html',
    styleUrls: ['admin.university-select.component.css'],
})
export class AdminUniversitySelectComponent implements OnInit{
  data:any;
  university:any;
  faculty:any;
  speciality:any;
  setUniversity(value){
    this.university = value
  }
  setFaculty(value){
    this.faculty = value
  }
  setSpeciality(value){
    this.speciality = value
  }
  ngOnInit():void {
    this.loadData()
  }
  universityToNode(university:University){
    let _university = {
      data: university,
      "collapsedIcon": "fa-graduation-cap",
      _type: "university",
      label: university.name,
      children: [{}],
      parent: {}
    }
    _university.children =  university.faculties? university.faculties.map((faculty:Faculty)=>{
      let _faculty = {
        data: faculty,
        parent: _university,
        label: faculty.name,
        "collapsedIcon": "fa-graduation-cap",
        _type: "faculty",
        children: [{}]
      }
      _faculty.children = faculty.specialities?faculty.specialities.map((speciality:Speciality)=>{
        return {
          data: speciality,
          parent: _faculty,
          label: speciality.name,
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
        this.data = res.map(this.universityToNode.bind(this))
        let parent = {children: this.data};
        this.data.forEach((u:any)=>{
          u.parent = parent
        })
      })
  }

  constructor(
    private universityService:UniversityService
  ){}
}
