import {TableComponent} from "../table.component";
import {Component} from "@angular/core";
import {SpecialityService} from "../../../service/speciality.service";
import {Speciality} from "../../../entity/Speciality";
@Component({
  moduleId: module.id,
  selector: "speciality-table",
  templateUrl: "speciality.table.component.html",
  styleUrls: ["./../../admin.component.css"]
})
export class SpecialityTableComponent extends TableComponent{
  constructor(service:SpecialityService){
    super(service)
  }
  clone(data){
    //noinspection TypeScriptValidateTypes
    return new Speciality(data)
  }
}
