import {University} from "./university";
/**
 * Created by alexandr on 01.11.16.
 */

export class Faculty {

  id: string;
  name: string;
  university: string;

  constructor(faculty:any) {
    if (faculty) {
      this.id = faculty.id;
      this.name = faculty.name;
      this.university = faculty.university;
    }
  }
}
