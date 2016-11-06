import {Injectable} from "@angular/core"
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Subscribable} from "../node_modules/rxjs/Observable";
@Injectable()
export class AppService{
  private url = "http://localhost:8080/hello"
  constructor(private http:Http){}

}
