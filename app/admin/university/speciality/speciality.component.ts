import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'Speciality',
    template: `<h1>{{title}}</h1>`,
    templateUrl: '.component.html'
})
export class SpecialityComponent {
    title = "Title"
}
