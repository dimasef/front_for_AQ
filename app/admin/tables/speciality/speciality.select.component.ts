import {SelectComponent} from "../select/select.component";
import {SpecialityService} from "../../../service/speciality.service";
import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'speciality-select',
  templateUrl: './../select/select.component.html'
})
export class SpecialitySelectComponent extends SelectComponent{
  constructor(service: SpecialityService){
    super(service)
  }
}
