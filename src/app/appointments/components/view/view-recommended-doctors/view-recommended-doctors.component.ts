import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../../services/appointment-service';
import { Appointment } from '../../../models/appointment';
import { RecommendedDoctor } from '../../../models/recommendedDoctor';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-view-recommended-doctors',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './view-recommended-doctors.component.html',
  styleUrl: './view-recommended-doctors.component.css'
})
export class ViewRecommendedDoctorsComponent {

  constructor(private appointmentService: AppointmentService, private rt: ActivatedRoute) {

  }
  recommendedDoctors: RecommendedDoctor[] = [];
  appointmentdetails: Appointment = new Appointment();
  id: number = 0;

  ngOnInit() {
    this.rt.queryParams.subscribe(params => {
      this.id = params['data'];
    })
    this.appointmentService.getAppointmentDetails(this.id).subscribe(data => {
      this.appointmentdetails = data;
      this.recommendedDoctors = this.appointmentdetails.appointmentReport.recommendedDoctors;
      console.log(this.appointmentdetails.appointmentReport.recommendedDoctors);
    },
    (error) =>{
      console.log(error);
      
    })
  }



}
