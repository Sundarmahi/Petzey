import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-close-appointment',
  standalone: true,
  imports: [CloseAppointmentComponent,CommonModule,FormsModule],
  templateUrl: './close-appointment.component.html',
  styleUrl: './close-appointment.component.css'
})
export class CloseAppointmentComponent {


}
