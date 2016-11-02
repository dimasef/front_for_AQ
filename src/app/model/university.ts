/**
 * Created by alexandr on 02.11.16.
 */

export class University {

  id: string;
  name: string;

  constructor(university:any) {
    if (university) {
      this.id = university.id;
      this.name = university.name;
    }
  }
}
