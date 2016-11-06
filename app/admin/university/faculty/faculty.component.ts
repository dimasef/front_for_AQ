import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'Faculty',
    template: `<h1>{{title}}</h1>`,
    templateUrl: '.component.html'
})
export class FacultyComponent {
    title = "Title"
}
