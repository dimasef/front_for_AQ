import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'LinkList',
    template: `<h1>{{title}}</h1>`,
    templateUrl: '.component.html'
})
export class LinkListComponent {
    @Input() isHorizontal: boolean;

    title = "Title"
}
