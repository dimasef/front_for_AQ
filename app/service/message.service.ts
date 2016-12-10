import {Injectable} from "@angular/core"
import {Message} from "primeng/primeng"

@Injectable()
export class MessageService{
  messages:Message[] = []
  error(text:any){
    if (text.message){
      text = text.message
    }

    this.messages.push({severity:'error', summary:'Error Message', detail:text.toString()})
  }
  message(text:any){
    this.messages.push({severity: 'none', summary: text})
  }
}
