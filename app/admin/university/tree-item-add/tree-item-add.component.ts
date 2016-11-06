import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'TreeItemAdd',
    template: `<h1>{{title}}</h1>`,
    templateUrl: '.component.html'
})
export class TreeItemAddComponent {
    title = "Title"
}
