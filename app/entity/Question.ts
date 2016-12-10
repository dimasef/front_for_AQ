import {Answer} from "./Answer";
import {User} from "./User";
export class Question{
  id:number
  title:string
  comment:string
  likesCount:number
  answersCount:number
  user:User
  creationDate:Date
  answers: Answer[]
  isLiked:boolean
  comment:string
  constructor({id, title, comment, user, answers, likes, creationTime}){
    this.id = id;
    this.title = title;
    this.comment = comment;
    this.answers = answers;
    this.creationDate = creationTime;
    this.user = new User(user||{})
    this.likesCount = likes&&likes.length
    this.answersCount = answers&&answers.length
  }
  get userName(){
    return this.user.email
  }
}
