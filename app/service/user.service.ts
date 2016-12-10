import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Service} from "./Service";
import {MessageService} from "./message.service";
import {User} from "../entity/User";


@Injectable()
export class UserService extends Service{
  constructor(http:Http, messagesService:MessageService){
    super(http, messagesService)
    this.url = "users";
  }
  cast(value){
    return new User(value) || {name:"Error"}
  }
  getCurrent(){
    return new User({id:2})
  }
}
