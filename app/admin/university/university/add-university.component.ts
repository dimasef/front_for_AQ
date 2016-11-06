import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'AddUniversity',
    template: `<h1>{{title}}</h1>`,
    templateUrl: '.component.html'
})
export class AddUniversityComponent {
    title = "Title"
}
