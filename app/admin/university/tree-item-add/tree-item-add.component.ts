import { Component, Input } from '@angular/core';
import {UniversityService} from "../university/university.service";


export class TreeItemAddComponent {
  service:any;
  data:any = {}
  @Input()
  node:any;
  @Input()
  parent:any;
  shouldShowForm:boolean = false
  constructor(service:any){
    this.service = service
  }
  showForm(){
    this.shouldShowForm = true
  }
  clear(){
    this.shouldShowForm = false
    this.data = {}
  }
  close(){
    this.shouldShowForm = false
  }
  get nodeType():string{
    throw new Error("should override")
  }

  confirm(){
    if (this.parent){
      this.data[this.parent.name] = this.parent.value;
    }
    this.service.post(this.data)
      .subscribe((data:any)=>{
        this.clear()
        if (!this.node.children){
          this.node.children = []
        }
        this.node.children.push({
          data: data,
          get label(){return this.data.name},
          parent: this.node,
          "collapsedIcon": "fa-graduation-cap",
          type: this.nodeType
        })
      })
  }
}
