import {TableComponent} from "../table.component";
import {Component} from "@angular/core";
import {FacultyService} from "./faculty.service";
import {Faculty} from "./Faculty";
@Component({
  moduleId: module.id,
  selector: "faculty-table",
  templateUrl: "faculty.table.component.html",
  styleUrls: ["./../../admin.component.css"]
})
export class FacultyTableComponent extends TableComponent{
  constructor(service:FacultyService){
    super(service)
  }
  clone(data){
    //noinspection TypeScriptValidateTypes
    return new Faculty(data)
  }
}
