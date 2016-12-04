import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: `home.component.html`,
  styleUrls: ["home.component.css"]})
export class HomeComponent {
  title = 'Home Component';
  subTitle = "sub-title"
  questions = [{
    setLiked(val){
      this.isLiked = val
      this.likesCount += val?1:-1
    },
    isLiked: false,
    isExpanded: false,
    setExpanded(){
      this.isExpanded = true
    },
    bestAnswer:{
      title: "becouse answer answer",
      user: {
        firstName: "Answeasfdasd",
        lastName: "Asdfgh"
      },
      creationDate: new Date(new Date().getTime()-10000),
      likesCount: 10
    },
    title: "Title title title?",
    creationDate: new Date(),
    user:{
      firstName: "Userfirstname",
      lastName: "Userlastname"
    },
    categories: [{
      name: "Sport"
    }, {
      name: "Bike"
    }],
    likesCount: 5,
    answersCount: 10
  }]
}
