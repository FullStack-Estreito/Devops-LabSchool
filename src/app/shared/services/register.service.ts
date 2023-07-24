import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher.model';
import { Student } from '../models/student.model';
import { PedagogicalMonitoring } from '../models/pedagogicalMonitoring.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  postTeacher(data: Teacher) {
    return this.httpClient.post(`${this.url}/pedagogos`, data)
  }

  postStudent(data: Student) {
    return this.httpClient.post(`${this.url}/alunos`, data)
  }

  postPedagogicalMonitoring(data: PedagogicalMonitoring){
    return this.httpClient.post(`${this.url}/acompanhamentos`, data)
  }
}
