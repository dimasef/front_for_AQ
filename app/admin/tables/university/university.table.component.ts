import {TableComponent} from "../table.component";
import {Component} from "@angular/core";
import {Service} from "../../../service/Service";
import {UniversityService} from "../../../service/university.service";
import {University} from "../../../entity/University";
@Component({
  moduleId: module.id,
  selector: "university-table",
  templateUrl: "university.table.component.html",
  styleUrls: ["./../../admin.component.css"]
})
export class UniversityTableComponent extends TableComponent{
  constructor(service:UniversityService){
    super(service)
  }
  clone(data){
    return new University(data)
  }
}
