import { Component } from '@angular/core';
import { AppointmentService } from '../../../services/appointment-service';
import { Appointment } from '../../../models/appointment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-comments',
  standalone: true,
  imports: [],
  templateUrl: './view-comments.component.html',
  styleUrl: './view-comments.component.css'
})
export class ViewCommentsComponent {
  comment:string=''
  constructor(private appointmentService: AppointmentService,private rt:ActivatedRoute) {

  }

  appointmentdetails: Appointment = new Appointment;
  id:number=0;

  ngOnInit() {
    this.rt.queryParams.subscribe(params => {
      this.id = params['data'];
    })
    this.appointmentService.getAppointmentDetails(this.id).subscribe(data => {
      this.appointmentdetails = data
      this.comment=this.appointmentdetails.appointmentReport.comments
      
    })
  }

}
