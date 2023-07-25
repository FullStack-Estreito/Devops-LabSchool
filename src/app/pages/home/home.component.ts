import { Component } from '@angular/core';
import { PedagogicalMonitoring, PedagogicalMonitoringDictionary } from 'src/app/shared/models/pedagogicalMonitoring.model';
import { Student } from 'src/app/shared/models/student.model';
import { Teacher } from 'src/app/shared/models/teacher.model';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrayStudents: Student[] = []
  arrayTeachers: Teacher[] = []
  arrayMonitoring: PedagogicalMonitoring[] = []
  arrayMonitoringFinished: PedagogicalMonitoring[] = []
  percentageFinished : number = 0
  mapMonitoringDates: Map<string, PedagogicalMonitoring[]> | undefined
  dictionaryMonitoringDates: PedagogicalMonitoringDictionary = {}
  

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.getStudents().subscribe((result) => {
      this.arrayStudents = result
    })

    this.listService.getTeachers().subscribe((result) => {
      this.arrayTeachers = result
    })

    this.listService.getPedagogicalMonitoring().subscribe((result) => {
      this.arrayMonitoring = result

      this.mapMonitoringDates = this.groupMonitoringByDates(this.arrayMonitoring)
      this.mapMonitoringDates.forEach((monitorings: PedagogicalMonitoring[], data: string) => {
        this.dictionaryMonitoringDates[data] = monitorings.length
      })
      

      this.arrayMonitoringFinished = this.arrayMonitoring.filter(monitoring => monitoring.finished === true)

      this.percentageFinished = this.arrayMonitoringFinished.length / this.arrayMonitoring.length * 100
    })
  }

  groupMonitoringByDates(monitorings: PedagogicalMonitoring[]): Map<string, PedagogicalMonitoring[]> {
    return monitorings.reduce((map, monitoring) => {
      const { date } = monitoring;
      if (map.has(date)) {
        map.get(date)?.push(monitoring);
      } else {
        map.set(date, [monitoring]);
      }
      return map;
    }, new Map<string, PedagogicalMonitoring[]>());
  }


}