import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(8)]
      ],
      email: ['', [Validators.email]],
      password: ['', [
        Validators.required, 
        customPasswordValidator]
      ]
    });
  }
  submit() {
    // access the entire form value
    console.log(this.userForm.value);
    // access the value for the name FormControl
    this.userForm.get('name')?.value;
    // set a new value for the name FormControl
    this.userForm.get('name')?.setValue('Daril');
    // reset the form to its initial state
    this.userForm.reset();
  }

}



function customPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const valid = /^(?=.*[a-zA-Z])(?=.*[0-9])/
    .test(control.value);
  return valid ? null : { 'invalidPassword': true };
}
