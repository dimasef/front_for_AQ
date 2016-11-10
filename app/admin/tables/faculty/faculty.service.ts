import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Service} from "../../Service";
import {Faculty} from "./Faculty";


@Injectable()
export class FacultyService extends Service{
  constructor(http:Http){
    super(http)
    this.url = "http://localhost:8080/rest/faculties";
  }
}
