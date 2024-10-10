import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../data-model/contact';

@Component({
  templateUrl: './child.component.html',
  selector: 'child'
})
export class ChildComponent {
  @Input() contact?: Contact
  @Output() delete = new EventEmitter<Contact>();
}
