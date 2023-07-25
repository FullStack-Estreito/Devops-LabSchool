import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedagogicalMonitoring } from '../models/pedagogicalMonitoring.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  url = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  updateMonitoring(id: number, data: PedagogicalMonitoring) {
    return this.httpClient.put(`${this.url}/acompanhamentos/${id}`, data)
  }
}
