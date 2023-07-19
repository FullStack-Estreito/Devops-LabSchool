import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url = "http://localhost:3000/usuarios"

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get<User[]>(this.url)
  }
}
