import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Test } from '../../../../shared/models/test';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment-service';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-view-tests',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './view-tests.component.html',
  styleUrl: './view-tests.component.css'
})
export class ViewTestsComponent {


  constructor(private appointmentService: AppointmentService, private rt: ActivatedRoute) {

  }
  test: Test[] = [];
  id: number = 0;
  appointmentdetails: Appointment = new Appointment()

  ngOnInit() {
    this.rt.queryParams.subscribe(params => {
      this.id = params['data'];
    })

    this.appointmentService.getAppointmentDetails(2).subscribe(data => {
      this.appointmentdetails = data
      this.test = this.appointmentdetails.appointmentReport.tests
      console.log("view tests working")
      console.log(this.test);
      
      
    })
  }


}
