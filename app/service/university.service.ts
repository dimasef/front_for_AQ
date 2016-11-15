import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {OnInit} from "@angular/core";
import {Service} from "./Service";
import {University} from "../entity/University";
import {MessageService} from "./message.service";


@Injectable()
export class UniversityService extends Service  {
  constructor(http:Http, messagesService:MessageService){
    super(http, messagesService)
    this.url = "universities"
  }
  cast(value){
    return new University(value)
  }

}
