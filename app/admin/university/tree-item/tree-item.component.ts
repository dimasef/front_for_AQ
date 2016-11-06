import { Component, Input } from '@angular/core';
import {Service} from "../../Service";


export class TreeItemComponent {
  @Input()
  node:any;
  constructor(private service:Service){}
  get data(){
    return this.node.data;
  }
  set data(value:any){
    this.node.data = value
  }
  prevValue:any;
  isEditing:boolean = false
  setEditing(){
    this.isEditing = true
    this.prevValue = Object.assign({}, this.data)
  }
  confirm(){
    this.isEditing = false
    this.service.put(this.data)
  }
  delete(){
    debugger
    this.service.delete(this.data)
      .toPromise()
      .then(()=>{
        debugger
        this.node.parent.children = this.node.parent.children.filter(
          (data:any)=>{
            return this.data.id !== data.id
          }
        )
      })
  }
  cancel(){
    this.isEditing = false
    this.data = this.prevValue
  }
}
