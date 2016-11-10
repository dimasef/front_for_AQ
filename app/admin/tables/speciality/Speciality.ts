import {BaseEntity} from "../BaseEntity";
import {Faculty} from "../faculty/Faculty";
export class Speciality extends BaseEntity{

  constructor({id, name, faculty}){
    super()
    this.id = id;
    this.name = name;
    this.faculty = faculty;

  }
  faculty:Faculty;
  get parent(){
    return this.faculty
  }
  set parent(value){
    this.faculty = value
  }
}
