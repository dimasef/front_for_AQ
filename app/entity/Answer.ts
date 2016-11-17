export class Answer{
  id:number
  content:string
  userName: string
  constructor({id, content, user}){
    this.id = id;
    this.content = content;
    this.userName = user && user.email
  }
}
