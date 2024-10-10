import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
  isLoggedIn = true;
  components = 4;
  projects = [
    {name: 'todo list'},
    {name: 'calendar'},
  ];
  birthDate = new Date("2024-03-02");

  
  username = 'Daril';
  isDisabled = () => {
    return this.isLoggedIn;
  };
  submit = () => {
    console.log(this.username);
  };


  handleOnClick(event: MouseEvent) {
    console.log(event);
  }

  constructor( private router: Router) { } 

  login() {
    this.router.navigate(['/user']);
  }
    

}
