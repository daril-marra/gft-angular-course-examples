import { Component } from '@angular/core';
import { User } from '../data-model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  userService: UserService;
  constructor(userservice: UserService) {
    this.userService = userservice;
  }
  user?: User;
  ngOnInit() {
    this.userService.sharedState.subscribe({
      next: (user) => { this.user = user; },
    }) 
    this.userService.get();
  }
}


