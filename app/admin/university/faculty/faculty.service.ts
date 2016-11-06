import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Faculty} from "./Faculty";
import {Service} from "../../Service";


@Injectable()
export class FacultyService extends Service{
  constructor(http:Http){
    super(http)
    this.url = "http://localhost:8080/rest/faculties";
  }
}
