import { Component } from '@angular/core';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewRecommendedDoctorsComponent } from '../view-recommended-doctors/view-recommended-doctors.component';
import { ViewRecommendedClinicsComponent } from '../view-recommended-clinics/view-recommended-clinics.component';
import { ViewCommentsComponent } from '../view-comments/view-comments.component';
import { ViewTestsComponent } from '../view-tests/view-tests.component';
import { ViewSymptomsComponent } from '../view-symptoms/view-symptoms.component';
import { AppointmentService } from '../../../services/appointment-service';
import { Symptoms } from '../../../../shared/models/symptoms';
import { Vitals } from '../../../../shared/models/vitals';
import { Appointment } from '../../../models/appointment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vitals-symptoms',
  standalone: true,
  imports: [PrescriptionsComponent, CommonModule, FormsModule, ViewRecommendedDoctorsComponent,
    ViewRecommendedClinicsComponent, ViewCommentsComponent, ViewTestsComponent, ViewSymptomsComponent],
  templateUrl: './view-vitals.component.html',
  styleUrl: './view-vitals.component.css'
})
export class VitalsSymptomsComponent {

  constructor(private appointmentService: AppointmentService, private rt: ActivatedRoute) {

  }
  symptoms: Symptoms[] = [];
  id: number = 0;
  vital: Vitals = new Vitals;
  appointmentdetails: Appointment = new Appointment

  ngOnInit() {
    this.rt.queryParams.subscribe(params => {
      this.id = params['data'];
    })
    this.appointmentService.getAppointmentDetails(this.id).subscribe(data => {
      this.appointmentdetails = data
      this.vital = this.appointmentdetails.appointmentReport.vitals;
      this.symptoms = this.appointmentdetails.appointmentReport.symptoms
    })
  }






}
