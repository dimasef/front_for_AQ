/**
 * Created by alexandr on 02.11.16.
 */

export class User {
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(user:any) {
    if (user) {
      this.email = user.email;
      this.password = user.password;
      this.passwordConfirm = user.passwordConfirm;
    }
  }
}
