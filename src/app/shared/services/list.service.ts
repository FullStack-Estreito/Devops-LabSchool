import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<Student[]>(`${this.url}/alunos`)
  }

  getTeachers() {
    return this.httpClient.get<Teacher[]>(`${this.url}/pedagogos`)
  }
}
