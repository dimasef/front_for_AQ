export class User{
  email: string;
  id: number
  constructor({id, email}){
    this.id = id;
    this.email = email;
  }
  get name(){
    return this.email || ""
  }
}
