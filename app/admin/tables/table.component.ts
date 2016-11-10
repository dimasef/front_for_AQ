

import {Component, OnInit} from "@angular/core";
import {Service} from "../Service";
@Component({
  moduleId: module.id,
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {


  displayDialog: boolean;

  current: any;

  selected: any;

  data:any[];

  newData:boolean;

  constructor(private service:Service) { }

  ngOnInit() {
    this.service.get()
      .subscribe(data=>{
        this.data = data
      })
  }
  
  showDialogToAdd() {
    this.newData = true;
    this.current = this.clone({})
    this.displayDialog = true;
  }

  save() {
	debugger
    if(this.newData){
	  this.service.post(this.current)
		.toPromise()
		.then(()=>{
			this.data.push(this.current)
			this.current = null;
			this.displayDialog = false;
		})
	}
    else{
	  this.service.put(this.current)
		.toPromise()
		.then(()=>{
			this.data[this.findSelectedCarIndex()] = this.current
			this.current = null;
			this.displayDialog = false;
		})
	}
    
  }

  delete() {
	this.service.delete(this.current)
		.toPromise().then(()=>{
		this.data.splice(this.findSelectedCarIndex(), 1);
		this.current = null;
		this.displayDialog = false;
	})
    
  }

  onRowSelect(event) {
    debugger
    this.newData = false;
    this.current = this.clone(event.data);
    this.displayDialog = true;
  }
  setChildren(newValue){
    this.current.children = newValue
  }
  setParent(newValue){
    this.current.parent = newValue
  }
  clone(data){}

  findSelectedCarIndex(): number {
    return this.data.indexOf(this.selected);
  }
}
