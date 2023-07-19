import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedagogo } from '../models/pedagogo.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url = "http://localhost:3000/pedagogos"

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<Pedagogo[]>(this.url)
  }
}
