import { Component, Input, Output, EventEmitter } from '@angular/core';


export class ItemSelectComponent {
  @Input()
  data:any;
  filtered:any;
  current:any;
  @Output()
  onChange:any=new EventEmitter()
  filter(event:any) {
    this.filtered = []
    if (!event.query)
      return this.handleDropdownClick()
    for(let i = 0; i < this.data.length; i++) {
      let node = this.data[i];
      if(node.data.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filtered.push(node);
      }
    }
  }
  handleDropdownClick() {
    //mimic remote call
    this.filtered = []
    setTimeout(()=>{
      this.filtered = this.data.slice()
    }, 100)
  }
  onSelect(value:any){
    this.current = value
    this.onChange.emit(this.current)
    this.filtered = []
  }
}
