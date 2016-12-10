import { Component, Input, OnInit } from '@angular/core';
import {FeedService} from "../../service/feed.service";
import {Question} from "../../entity/Question";

@Component({
    moduleId: module.id,
    selector: 'feed',
    templateUrl: 'feed.component.html',
    styleUrls: ["feed.component.css"]
})
export class FeedComponent implements OnInit{
  constructor(private service:FeedService){}
  isLoading = false
  ngOnInit():void {
    this._loadMore()
  }
  private _loadMore(){
    this.isLoading = true
    this.service.get({
        id: this.questions[this.questions.length-1]&&this.questions[this.questions.length-1].id,
        length: 5
      })
      .subscribe((data:Question[])=>{
        this.questions = this.questions.concat(data)
        this.isLoading = false
      })
  }
  loadMore() {
    if (this.questions.length && !this.isLoading){
      this._loadMore()
    }
  }
  like(question:Question){
    question.isLiked = true
    question.likesCount+=1
    this.service.like(question)
  }
  unlike(question:Question){
    question.isLiked = false
    question.likesCount-=1
    this.service.like(question)
  }
  questions:Question[] = []
}
