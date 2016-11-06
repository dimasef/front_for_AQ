import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'TreeItem',
    template: `<h1>{{title}}</h1>`,
    templateUrl: '.component.html'
})
export class TreeItemComponent {
    title = "Title"
}
