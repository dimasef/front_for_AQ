import {Injectable} from "@angular/core"
import {Observable} from "../../../../node_modules/rxjs/Observable.d";
import {Http} from "@angular/http";
import {OnInit} from "@angular/core";
import {University} from "./../University";


@Injectable()
export class UniversityService implements OnInit{
  ngOnInit():void {
    this.url = "http://localhost:8080/rest/universities"
  }
  url:string;
  constructor(private http:Http){

  }
  get():Observable<University[]>{
    /*return this.http.get(this.url)
      .map((res:any)=>res.json())*/
    //noinspection TypeScriptUnresolvedFunction
    return Observable.of([{
      id: 1,
      name: "Uni1 looooooooooooooooong"
    }, {
      id: 2,
      name: "Uni2"
    }, {
      id: 3,
      name: "Uni3"
    }])
  }
}
