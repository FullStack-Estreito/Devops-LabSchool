import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  postUser(data: User){
    return this.httpClient.post(`${this.url}/usuarios`, data)
  }

  postStudent(data: Student){
    return this.httpClient.post(`${this.url}/alunos`, data)
  }
}
