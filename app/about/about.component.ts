import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    template: `<h1>{{title}}</h1>`,
    //templateUrl: 'categories.component.html'
})
export class AboutComponent {
    title = "About"
}
