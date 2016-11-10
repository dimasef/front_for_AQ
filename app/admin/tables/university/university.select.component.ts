import {SelectComponent} from "../select/select.component";
import {UniversityService} from "./university.service";
import {Component} from "@angular/core";


@Component({
  moduleId: module.id,
  selector: 'university-select',
  templateUrl: './../select/select.component.html'
})
export class UniversitySelectComponent extends SelectComponent{
  constructor(service:UniversityService){
    super(service)
  }
}
