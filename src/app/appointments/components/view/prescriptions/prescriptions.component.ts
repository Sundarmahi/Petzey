import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { ViewRecommendedClinicsComponent } from '../view-recommended-clinics/view-recommended-clinics.component';
import { Prescription } from '../../../../shared/models/prescription';
import { AppointmentService } from '../../../services/appointment-service';
import { Appointment } from '../../../models/appointment';
import { error } from 'node:console';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [CommonModule, FormsModule, ViewRecommendedClinicsComponent],
  templateUrl: './prescriptions.component.html',
  styleUrl: './prescriptions.component.css'
})
export class PrescriptionsComponent {

  prescriptions: Prescription[] = [];

  constructor(private appointmentService: AppointmentService,private rt:ActivatedRoute) {
  }
  appointmentdetails: Appointment = new Appointment();
  id:number=0;
  ngOnInit(): void {
    this.rt.queryParams.subscribe(params => {
      this.id = params['data'];
    })
    this.appointmentService.getAppointmentDetails(this.id).subscribe(data => {
      this.appointmentdetails = data
      this.prescriptions = this.appointmentdetails.appointmentReport.prescriptions
      console.log("peres" + this.appointmentdetails.appointmentReport.prescriptions);
    },
      (error) => {
        console.log(error);
      })
  }

}
