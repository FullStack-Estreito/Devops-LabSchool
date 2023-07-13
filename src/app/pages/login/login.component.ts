import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userEmailInput: string = ''
  userPasswordInput: string = ''
  users: User[] = []
  validationEmail: boolean = false
  validationPassword: boolean = false
  hideMessageErrorPassword: boolean = true
  hideMessageErrorEmail: boolean = true
  message: string = ''


  constructor(private loginService: LoginService) { }

  login() {
    console.log(this.userEmailInput, this.userPasswordInput)
    // Getting the registered users
    this.loginService.getUsers()
      .subscribe((result) => {
        this.users = result

        this.validationEmail = false
        this.validationPassword = false
        this.hideMessageErrorPassword = true
        this.hideMessageErrorEmail = true

        // Checking if it match with the input information
        for (let item of this.users) {
          if (this.userEmailInput === item.email) {
            this.validationEmail = true

            if (this.userPasswordInput === item.password) {
              this.validationPassword = true
              break
            }
          }
        }

        if (this.validationEmail === true && this.validationPassword === true) {
          console.log("logado")
        }
        else if (this.validationEmail === true && this.validationPassword === false) {
          console.log("senha errada")
          this.hideMessageErrorPassword = false
        }
        else if (this.validationEmail === false) {
          console.log("usuário inexistente")
          this.hideMessageErrorEmail = false
        }
      })}

      redirectRegisterUser() {
        console.log("oi")
      }
}


