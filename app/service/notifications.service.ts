import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";


@Injectable()
export class NotificationsService {
  data = [1,2,3,4,5,6,7].map(i=>({
    title: "Notification about something",
    content: "notification "+i,
    isUnread: true,
    question:null,
    answer: null,
    date: new Date(),
  })).concat([{
    title: "Some answered yout question",
    content: "",
    isUnread: false,
    date: new Date(),
    question:{
      title: "Question 1"
    },
    answer: {
      content: "Answer 1"
    }
  },
    {
      title: "Some answered yout question",
      date: new Date(),
      content: "",
      isUnread: false,

      question:{
        title: "Question 1"
      },
      answer: {
        content: "Answer 1"
      }
    },
    {
      title: "Some answered yout question",
      date: new Date(),
      content: "",
      question:{
        title: "Question 1"
      },
      isUnread: false,

      answer: {
        content: "Answer 1"
      }
    }]).concat([1,2,3,4,5,6,7].map(i=>({
    title: "Notification about something",
    content: "notification "+i,
    question:null,
    isUnread: false,

    answer: null,
    date: new Date()
  })))
  get(){
    //noinspection TypeScriptUnresolvedFunction
    return Observable.of(this.data)
  }
  getUnreadCount(){
    //noinspection TypeScriptUnresolvedFunction
    return Observable.of(this.data.filter(val=>val.isUnread).length)
  }
}
