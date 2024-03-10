import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment-service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { error } from 'node:console';
import { Vet } from '../../../../vets/models/vet';

@Component({
  selector: 'app-view-appointment-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './view-appointment-details.component.html',
  styleUrl: './view-appointment-details.component.css'
})
export class ViewAppointmentDetailsComponent {




  id: number = 0
  constructor(private appointmentService: AppointmentService, private rt: ActivatedRoute) { }


  onCall() {
    console.log('Call button clicked');
  }

  onChat() {
    console.log('Chat button clicked');
  }

  onClose() {
    console.log('Close button clicked');
  }

  onCancel() {
    console.log('Cancel button clicked');
  }

  onSubmit() {
    console.log("called")
  }

  cancelSubmit() {
    console.log(this.id);

    this.appointmentService.cancel_appointment(this.id).subscribe(
      response => console.log('Cancelled Successfully', response),
      error => console.error('Error', error)
    );
  }
  closeSubmit() {
    this.appointmentService.close_appointment(this.id).subscribe(
      response => console.log('Closed Successfully', response),
      error => console.error('Error', error)
    );
  }


  vets: Vet[] = []
  doctorName: string = ''
  appointment: Appointment = new Appointment

  ngOnInit(): void {
    this.rt.queryParams.subscribe(params => {
      this.id = params['data'];
    })
    this.appointmentService.getAppointmentDetails(this.id).subscribe(data => {
      this.appointment = data
      console.log("ada" + this.appointment);
    },
      (error) => {
        console.log(error);

      })
    this.appointmentService.getAllVets().subscribe(data => {
        this.vets = data;
        console.log(data);
      })
  }
  updateSubmit(data: Appointment) {
    data.appointmentId = this.id
    this.appointmentService.editAppointment(this.appointment).subscribe(data => {
      alert("update is completed")
      console.log(data);

    },
      (error) => {
        // alert(error)

      });

    console.log (this.appointment.vetId =Number(this.doctorName));
  }





  
}
