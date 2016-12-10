import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    template: `<h1>{{title}}</h1><app-material-test></app-material-test>`,
})
export class AboutComponent {
    title = "About"
}
