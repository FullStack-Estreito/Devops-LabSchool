import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedagogicalMonitoring } from 'src/app/shared/models/pedagogicalMonitoring.model';
import { UpdateService } from 'src/app/shared/services/update.service';

@Component({
  selector: 'app-edition-monitoring',
  templateUrl: './edition-monitoring.component.html',
  styleUrls: ['./edition-monitoring.component.css']
})
export class EditionMonitoringComponent {

  monitoring_id: string | null  = ''
  monitoring_id_number: number = 0
  monitoring: PedagogicalMonitoring = {
    student: '',
    teacher: '',
    title: '',
    date: '',
    description: '',
    finished: false
  }

  constructor( private route: Router, private activateRoute: ActivatedRoute, private updateService: UpdateService) {}

  ngOnInit(){
    this.monitoring_id = this.activateRoute.snapshot.paramMap.get('id')

    if (this.monitoring_id !== null) {
      this.monitoring_id_number = parseInt(this.monitoring_id)
    }
    

  }

  update(outputData: PedagogicalMonitoring){

    this.monitoring = outputData
    this.updateService.updateMonitoring(this.monitoring_id_number, this.monitoring)
    .subscribe((result: any) => {
      console.log(result)
      alert("Pedagogical monitoring updated with success.")
      this.route.navigate(['/list-monitorings'])
    })
    

  }

}
