import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppointmentService } from '../../../services/appointment-service';
import { Appointment } from '../../../models/appointment';
import { Symptoms } from '../../../../shared/models/symptoms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-symptoms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-symptoms.component.html',
  styleUrl: './view-symptoms.component.css'
})
export class ViewSymptomsComponent {
  constructor(private appointmentService: AppointmentService,private rt:ActivatedRoute) {

  }
  symptoms: Symptoms[] = [];
  id:number=0;
  appointmentdetails: Appointment = new Appointment();

  ngOnInit() {
    this.rt.queryParams.subscribe(params => {
      this.id = params['data'];
    })
    this.appointmentService.getAppointmentDetails(this.id).subscribe(data => {
      this.appointmentdetails = data;
      this.symptoms = this.appointmentdetails.appointmentReport.symptoms;
    })
  }
}
