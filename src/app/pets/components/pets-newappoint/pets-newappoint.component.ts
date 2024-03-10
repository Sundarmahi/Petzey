import { Component } from '@angular/core';
import { error } from 'console';
import { Pet } from '../../models/pet';
import { PetParent } from '../../models/pet_parent';
import { Vet } from '../../../vets/models/vet';

import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Appointment } from '../../../appointments/models/appointment';
import { AppointmentService } from '../../../appointments/services/appointment-service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pets-newappoint',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgIf,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './pets-newappoint.component.html',
  styleUrl: './pets-newappoint.component.css',
})
export class PetsNewappointComponent {
  errorMessage: string = '';
  appointmentForm: any;
  minDate: string = '';
  petParentId: number = 1;
  selectedPetId: number = 0;
  selectedVetId: number = 0;
  selectedButton: string = '09:00';
  newAppointment: Appointment = new Appointment();
  pets: Pet[] = [];
  petParent: PetParent = new PetParent();
  vets: Vet[] = [];
  time: Date = new Date();
  constructor(private service: AppointmentService) {
    this.setMinDate();
  }
  setMinDate(): void {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();

    this.minDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
  }

  selectButton(time: string) {
    this.selectedButton = time;
    const [hours, minutes] = time.split(':').map(Number);
    this.time.setHours(hours);
    this.time.setMinutes(minutes);
    this.newAppointment.appointment_time = time;
    localStorage.setItem('time', this.selectedButton);
    console.log(this.selectedPetId);
    console.log(this.selectedVetId);
  }

  getVetID(event: any) {
    this.selectedVetId = event.target.value;
  }

  getPetID(event: any) {
    this.selectedPetId = event.target.value;
  }

  ngOnInit(): void {
    this.service.getPets(this.petParentId).subscribe((data) => {
      this.pets = data;
    });

    this.service.getAllVets().subscribe((data) => {
      this.vets = data;
    });
  }

  onSumbitForm(): void {
    this.newAppointment.appointmentDate = this.time;
    this.newAppointment.appointment_time = `${this.newAppointment.appointment_time}`;
    this.service
      .addAppointment(
        this.newAppointment,
        this.selectedVetId,
        1,
        this.selectedPetId
      )
      .subscribe(
        (data) => {},
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }
}
