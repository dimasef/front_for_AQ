import {SelectComponent} from "../select/select.component";
import {FacultyService} from "../../../service/faculty.service";
import {Component} from "@angular/core";
@Component({
  moduleId: module.id,
  selector: 'faculty-select',
  templateUrl: './../select/select.component.html'
})
export class FacultySelectComponent extends SelectComponent{
  constructor(service:FacultyService){
    super(service)
  }
}
