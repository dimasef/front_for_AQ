import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'Categories',
    template: `<h1>{{title}}</h1>`,
    //templateUrl: 'categories.component.html'
})
export class CategoriesComponent {
    title = "Categories"
}
