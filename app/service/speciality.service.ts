import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Service} from "./Service";
import {Speciality} from "../entity/Speciality";
import {MessageService} from "./message.service";


@Injectable()
export class SpecialityService extends Service{
  constructor(http:Http, messagesService:MessageService){
    super(http, messagesService)
    this.url = "specialities"
  }
  cast(value){
    return new Speciality(value)
  }

}
