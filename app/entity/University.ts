import {Faculty} from "./Faculty";
import {BaseEntity} from "./BaseEntity";
export class University extends BaseEntity{

  constructor({id, name, faculties}){
    super()
    this.id = id;
    this.name = name || ""
    this.faculties = (faculties && faculties.slice()) || [];

  }
  faculties:Faculty[];

  get children(){
    return this.faculties;
  }
  set children(value){
    this.faculties = value
  }
}

