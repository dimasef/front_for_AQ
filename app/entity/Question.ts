import {Answer} from "./Answer";
export class Question{
  id:number
  title:string
  comment:string
  userName:string
  answers: Answer[]
  constructor({id, title, comment, user, answers}){
    this.id = id;
    this.title = title;
    this.comment = comment;
    this.answers = answers;
    this.userName = user && user.email
  }
}
