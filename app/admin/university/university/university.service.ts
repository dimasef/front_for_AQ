import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {OnInit} from "@angular/core";
import {University} from "./University";
import {Service} from "../../Service";


@Injectable()
export class UniversityService extends Service  implements OnInit {
  ngOnInit():void {
  }
  constructor(http:Http){
    super(http)
    this.url = "http://localhost:8080/rest/universities"
  }

}
