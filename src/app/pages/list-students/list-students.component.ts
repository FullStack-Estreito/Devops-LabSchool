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
  userSearch: string = ''

  constructor(private listService: ListService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.listService.getStudents().subscribe((result) => {
      this.arrayStudents = result;
      for (let item of this.arrayStudents){
        
      }
    })
  }

  search(){
    for (let student of this.arrayStudents){
      if (student.name.toLowerCase().includes(this.userSearch.toLowerCase())){
        console.log("oi")
      }
    }
  }
}

