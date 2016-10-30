import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'admin-questions',
    template: `<h1>{{title}}</h1>`,
    //templateUrl: '.component.html'
})
export class AdminQuestionsComponent {
    title = "Ques"
}
