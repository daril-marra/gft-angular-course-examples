import { Component, effect, input, output } from '@angular/core';
import { outputFromObservable, outputToObservable } from "@angular/core/rxjs-interop";
import { UserService } from '../services/user.service';
import { User } from '../data-model/user';

@Component({
  selector: 'app-signals-child',
  templateUrl: './signals-child.component.html',
  styleUrl: './signals-child.component.scss'
})
export class SignalsChildComponent {

  // optional
  firstName = input<string>();  // InputSignal<string|undefined>

  // alias
  date = input(new Date(), {alias: 'birthDate'}); // InputSignal<Date>

  // required
  lastName = input.required<string>();  // InputSignal<string>

  //transform
  gender = input(undefined, {transform: this.mapGender});  // InputSignal<string|undefined>

  mapGender(value?:string): string|undefined {
    if (!value) {
      return undefined;
    }
    switch (value) {
      case "M": return "Male";
      case "F": return "Female";
      default: return value;
    }
  }

  // output event
  addQuantity = output<number>();
  addOne() {
    this.addQuantity.emit(1);
  }

  // output TO Observable (that the child can listen to)
  removeQuantity = output<number>();
  removeQuantityObs = outputToObservable<number>(this.removeQuantity);
  removeOne() {
    this.removeQuantity.emit(-1);
  }

  // output FROM Observable (that the child can push values to)
  userResponse = outputFromObservable<User>(this.userServer.getStub());

  constructor(private userServer: UserService) {
    // effect to listen to input changes
    effect(() => console.log("lastName changed: ", this.lastName()));
    // listen to output observable
    this.removeQuantityObs.subscribe((v) => console.log(`removed ${v} quantity`));
  }

}
