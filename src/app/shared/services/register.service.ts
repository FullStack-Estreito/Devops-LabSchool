import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:3000/usuarios"

  constructor(private httpClient: HttpClient) { }

  postUser(data: User){
    return this.httpClient.post(this.url, data)
  }
}
