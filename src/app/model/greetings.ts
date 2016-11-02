/**
 * Created by Alexandr on 02.11.2016.
 */

export class Greetings {

  greetings: string;

  constructor(greetings: any) {
    if (greetings) {
      this.greetings = greetings.greetings;
    }
  }
}
