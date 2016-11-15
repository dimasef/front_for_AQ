import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {MessageService} from "./message.service";

export class Service{
  origin = "https://pure-mesa-13823.herokuapp.com/rest/"
  url:string;
  constructor(private http:Http, private messagesService:MessageService){
  }
  cast(value){
    return value
  }
  post(data:any){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.origin+this.url, data)
      .map((res:any)=>res.json())
      .catch(e=>{
        this.messagesService.error(e)
        return e
      })

  }
  get():Observable<any[]>{
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(this.origin+this.url)
      .map((res:any)=>{
        return res.json()
      })
      .map((array:any[])=>{
        debugger
        return array.map(value => this.cast(value))
      })
      .catch(e=>{
        this.messagesService.error(e)
        return e
      })

  }
  put(data:any){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.put(this.origin+this.url+"/"+data.id, data)
      .map((res:any)=>res.json())
      .catch(e=>{
        this.messagesService.error(e)
        return e
      })
  }

  delete(data:any){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.delete(this.origin+this.url+"/"+data.id)
      .map((res:any)=>res.json())
      .catch(e=>{
        this.messagesService.error(e)
        return e
      })

  }
}
