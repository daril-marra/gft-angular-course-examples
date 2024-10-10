import { Component } from '@angular/core';
import { User } from '../data-model/user';
import { Contact } from '../data-model/contact';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  deleteContact(contact: Contact) {
    console.log(contact);
    this.user.contact = undefined;
  }

  user: User = {
    name: "Daril",
    dateOfBirth: new Date(),
    contact: {
      type: "email",
      value: "daril@gft.com"
    }
  }
}
