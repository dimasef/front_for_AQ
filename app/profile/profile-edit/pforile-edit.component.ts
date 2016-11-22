import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'profile-edit',
  templateUrl: 'profile-edit.component.html',
  styleUrls: ["profile-edit.component.css"]
})
export class ProfileEditComponent {
  title = "Questions"
  user = {}
}
