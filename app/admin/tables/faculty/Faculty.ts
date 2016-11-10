import {University} from "../university/University";
import {Speciality} from "../speciality/Speciality";
import {BaseEntity} from "../BaseEntity";
export class Faculty extends BaseEntity{

  constructor({id, name, university, specialities}){
    super()
    this.id = id;
    this.name = name;
    this.university = university;
    this.specialities = specialities && specialities.slice();
  }
  university:University;
  get parent(){
    return this.university;
  }
  specialities:Speciality[];
  get children(){
    return this.specialities
  }
  set parent(value){
    this.university = value
  }
  set children(value){
    this.specialities = value
  }
}
