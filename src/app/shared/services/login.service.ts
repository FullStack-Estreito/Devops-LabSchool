import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url = "http://localhost:3000/pedagogos"

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<Teacher[]>(this.url)
  }
}
