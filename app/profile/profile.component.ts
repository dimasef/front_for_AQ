import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'questions',
    template: `<h1>{{title}}</h1>`,
    //templateUrl: 'categories.component.html'
})
export class QuestionsComponent {
    title = "Questions"
}
