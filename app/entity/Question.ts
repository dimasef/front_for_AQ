import {Answer} from "./Answer";
import {User} from "./User";
export class Question{
  id:number
  title:string
  comment:string
  user:User
  answers: Answer[]
  constructor({id, title, comment, user, answers}){
    this.id = id;
    this.title = title;
    this.comment = comment;
    this.answers = answers;
    this.user = new User(user||{})
  }
  get userName(){
    return this.user.email
  }
}
