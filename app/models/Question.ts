/**
 * Created by user on 31.10.2016.
 */

import {User} from "./User";
/**
 * Model for sign up and sign in form
 */
export class Question{
  id: string
  title: string
  comment: string
  user: User
}
