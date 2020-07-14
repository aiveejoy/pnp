import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../Services/data_models';
import { Router } from '@angular/router';
import {Services} from '../Services/services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  currentUser: UserAccount = {
    username: 'Princess',
    password: 'pjduran'
  };

  constructor(
    private router: Router,
    private eventService: Services
  ) {}

  ngOnInit(): void {
    this.eventService.currentUserAccount.subscribe( currentUser =>{
      console.log(currentUser);
    })
  }

  login(UserAccount: UserAccount) {
    if (UserAccount.username === this.currentUser.username && UserAccount.password === this.currentUser.password){
      this.eventService.updateCurrentUser(UserAccount);
      console.log('allowed');
      this.router.navigate(['/events']);
    } else {
      console.log('not allowed');
    }
  }

}
