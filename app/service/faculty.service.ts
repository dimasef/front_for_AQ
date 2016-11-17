import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Service} from "./Service";
import {Faculty} from "../entity/Faculty";
import {MessageService} from "./message.service";


@Injectable()
export class FacultyService extends Service{
  constructor(http:Http, messagesService:MessageService){
    super(http, messagesService)
    this.url = "faculties";
  }
  cast(value){
    return new Faculty(value) || {name:"Error"}
  }
}
