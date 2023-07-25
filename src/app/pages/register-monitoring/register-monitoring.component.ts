import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Teacher } from 'src/app/shared/models/teacher.model';
import { Student } from 'src/app/shared/models/student.model';
import { ListService } from 'src/app/shared/services/list.service';
import { DatePipe } from '@angular/common';
import { RegisterService } from 'src/app/shared/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-monitoring',
  templateUrl: './register-monitoring.component.html',
  styleUrls: ['./register-monitoring.component.css']
})
export class RegisterMonitoringComponent {

  registerForm: FormGroup
  arrayStudents: Student[] = []
  arrayTeachers: Teacher[] = []

  constructor(private listService: ListService, private registerService: RegisterService, private datePipe: DatePipe, private route: Router) {

    this.registerForm = new FormGroup({

      'studentName': new FormControl('', Validators.required),

      'teacherName': new FormControl('', Validators.required),

      'title': new FormControl('', Validators.required),

      'date': new FormControl(this.formatCurrentDate(), Validators.required),

      'description': new FormControl('', Validators.required),

      'finished': new FormControl('')
    })
  }

  ngOnInit(): void {
    this.listService.getStudents().subscribe((result) => {
      this.arrayStudents = result;
    })

    this.listService.getTeachers().subscribe((result) => {
      this.arrayTeachers = result;
    })
  }

  validateErrorMessage(field: string) {
    return (this.registerForm.get(field)?.value === null || this.registerForm.get(field)?.value.length === 0) && this.registerForm.get(field)?.touched
  }

  validateSelectErrorMessage(field: string) {
    return (this.registerForm.get(field)?.value === '' || this.registerForm.get(field)?.value === 'Select') && this.registerForm.get(field)?.touched
  }


  formatCurrentDate() {
    const currentDate = new Date()
    const currentDay = currentDate.getDate()
    const currentYear = currentDate.getFullYear()
    let currentMonth: string | number = currentDate.getMonth() + 1
    if (currentMonth < 10) {
      currentMonth = `0${currentMonth}`
    }
    return `${currentYear}-${currentMonth}-${currentDay}`
  }

  register() {

    const student = this.registerForm.get('studentName')?.value
    const teacher = this.registerForm.get('teacherName')?.value
    const title =  this.registerForm.get('title')?.value
    let date = this.registerForm.get('date')?.value
    const description =  this.registerForm.get('description')?.value
    const finisehd = this.registerForm.get('finished')?.value

    date = this.datePipe.transform(date, 'dd/MM/yyyy')

    const postData = {
      "student": student,
      "teacher": teacher,
      "title": title,
      "date": date,
      "description": description,
      "finished": finisehd
    }

    this.registerService.postPedagogicalMonitoring(postData)
      .subscribe((result: any) => {
        console.log(result)
        alert("Pedagogical monitoring registered with success.")
        this.route.navigate(['/list-monitorings'])
      })
  }
}
