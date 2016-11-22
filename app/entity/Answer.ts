import {User} from "./User";
export class Answer{
  id:number
  content:string
  user: User
  constructor({id, content, user}){
    this.id = id;
    this.content = content;
    this.user = new User(user||{})
  }
  get userName(){
    return this.user.email
  }
}
