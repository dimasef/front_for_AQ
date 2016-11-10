import {Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Service} from "../../Service";
export class SelectComponent implements OnInit{
  ngOnInit(): void {
    this.service.get()
      .map((data:any)=>(data.map(data=>({
        id: data.id,
        name: data.name
      }))))
      .subscribe(data=>{
        debugger
        this.data = data
      })
	if (!this.current){
		debugger
		this.current = this.isMultiple?[]:null;
	}
    
  }
  @Input()
  isMultiple:boolean
  data:any;
  filtered:any;
  @Input()
  current:any;
  @Output()
  onChange:any=new EventEmitter()

  constructor(private service:Service){}
  filter(event:any) {
    this.filtered = []
    for(let i = 0; i < this.data.length; i++) {
      let node = this.data[i];
	  debugger
      if(node.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
		  var found;
		  if (this.isMultiple){
			  found = this.current && this.current.find((item)=>item.name.toLowerCase() == node.name.toLowerCase())
		  }else{
			  found = this.current && this.current.name.toLowerCase() == node.name.toLowerCase()
		  }
		  if (!found){
			  this.filtered.push(node)
		  }
		  
      }
    }
  }
  handleDropdownClick() {
    //mimic remote call
    debugger
    this.filtered = []
    setTimeout(()=>{
      this.filter({query: ""})
    }, 100)
  }
  onSelect(value:any){
    debugger
    if (value.id && value.name){
      if (this.isMultiple){
        //this.current.push(value)
      }else{
        //this.current = value
      }
      this.onChange.emit(this.current)
      this.filtered = []
    }
  }
}
