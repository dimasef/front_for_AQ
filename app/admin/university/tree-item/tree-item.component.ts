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
    /*let {id, name} = this.data
    this.service.put({
      id, name
    })*/
    this.service.put(this.data)
      .toPromise()
      .then(()=>this.isEditing = false)
  }
  delete(){
    this.service.delete(this.data)
      .toPromise()
      .then(()=>{
        //delete element from array
        //javascript sweet javascript
        for (let i = 0; i < this.node.parent.children.length; i+=1){
          if (this.node.parent.children[i].data.id === this.data.id){
            this.node.parent.children.splice(i, 1)
          }
        }
      })
  }
  cancel(){
    this.isEditing = false
    this.data = this.prevValue
  }
}
