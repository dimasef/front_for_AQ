import {Observable} from "rxjs/Observable";
import {Http} from "../../node_modules/@angular/http/src/http";

export class Service{
  url:string;
  http:Http;
  constructor(http:Http){
    this.http = http;
  }
  post(data:any){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.url, data)
      .map((res:any)=>res.json())
  }
  get():Observable<any[]>{
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(this.url)
      .map((res:any)=>{
        return res.json()
      })
  }
  put(data:any){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.put(this.url+"/"+data.id, data)
      .map((res:any)=>res.json())
  }

  delete(data:any){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.delete(this.url+"/"+data.id)
      .map((res:any)=>res.json())
  }
}
