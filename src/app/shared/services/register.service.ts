import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedagogo } from '../models/pedagogo.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  postPedagogo(data: Pedagogo) {
    return this.httpClient.post(`${this.url}/pedagogos`, data)
  }

  postStudent(data: Student) {
    return this.httpClient.post(`${this.url}/alunos`, data)
  }
}
