export class User{
  email: string;
  id: number
  private firstName;
  private lastName;
  private middleName;
  constructor({id, email, firstName, lastName, middleName}){
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }
  get name(){
    if (!this.firstName && !this.lastName)return "Anonymous"
    return `${this.firstName||""} ${this.lastName||""}`
  }
}
