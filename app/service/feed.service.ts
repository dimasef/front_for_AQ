import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Service} from "./Service";
import {MessageService} from "./message.service";
import {Question} from "../entity/Question";
import {UserService} from "./user.service";


@Injectable()
export class FeedService extends Service{
  constructor(http:Http, messagesService:MessageService,
              private userService:UserService){
    super(http, messagesService)
    this.url = "feed";
  }
  cast(value){
    return new Question(value)
  }
  get({id=0, length=10}){
    return super.get(`/internal/${id?id+"/":""}${length?length:""}`)
  }
  like(question){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.put(`${this.origin}/questions/like/${this.userService.getCurrent().id}/${question.id}`,{})
      .catch(e=>{
        this.messagesService.error(e)
        return e
      })
      .toPromise()
  }
}

