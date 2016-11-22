import {SelectComponent} from "../select/select.component";
import {Component} from "@angular/core";
import {UserService} from "../../../service/user.service";


@Component({
  moduleId: module.id,
  selector: 'user-select',
  templateUrl: './../select/select.component.html'
})
export class UserSelectComponent extends SelectComponent{
  constructor(service:UserService){
    super(service)
  }
}
