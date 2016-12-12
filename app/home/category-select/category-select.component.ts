import { Component, Input } from '@angular/core';
import {MessageService} from "../../service/message.service";

@Component({
    moduleId: module.id,
    selector: 'category-select',
    templateUrl: 'category-select.component.html',
    styleUrls:["category-select.component.css"]
})
export class CategorySelectComponent {
  constructor(private messageService:MessageService){}
  text="tee"
  items = [1,2,3,4,5,6,7].map(i=>({name:"name"+i,value: "val"+i}))
  selected(value){
    this.messageService.message("SELECTED "+JSON.stringify(value))
  }
}

