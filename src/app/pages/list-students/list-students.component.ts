import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';
import { ListService } from 'src/app/shared/services/list.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  arrayStudents: Student[] = []
  orignalArrayStudents: Student[] = []
  userSearch: string = ''

  constructor(private listService: ListService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.listService.getStudents().subscribe((result) => {
      this.arrayStudents = result;
      this.orignalArrayStudents = [...result]
    })
  }

  search(){
    if(this.userSearch){
      this.arrayStudents = this.orignalArrayStudents.filter(student => student.name.toLowerCase().includes(this.userSearch.toLowerCase()))
      if (this.arrayStudents.length === 0){
        this.arrayStudents = this.orignalArrayStudents
        alert("no student")
      }
    }

  }
}

