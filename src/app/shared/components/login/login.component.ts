import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userEmailInput: string = ''
  userPasswordInput: string = ''

  login() {
    console.log(this.userEmailInput)
    console.log(this.userPasswordInput)
  }

}
