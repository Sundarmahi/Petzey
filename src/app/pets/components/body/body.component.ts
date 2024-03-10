import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Appointment } from '../../../appointments/models/appointment';
import { DashboardService } from '../../../appointments/services/dashboard_service/dashboard.service';

import {
  CognitoService,
  IUser,
} from '../../../authentication/Service/cognito.service';
import { Pet } from '../../models/pet';
import { PetServiceService } from '../../service/pet-service.service';
import { vets } from '../../models/vetdata';
import { Vet } from '../../../vets/models/vet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  standalone: true,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    FormsModule,
  ],
})
export class BodyComponent {
  constructor(
    private service: DashboardService,
    private rt: Router,
    private cognitoservice: CognitoService,
    private petservice: PetServiceService,
    private http:HttpClient
  ) {
    this.currentUser = {} as IUser;
  }
  currentUser: IUser;
  role: string = 'vet';
  allAppointment: Appointment[] = [];

  myObject: { [key: number]: any } = {};
  vetObject: { [key: number]: any } = {};

  ispet() {
    return this.role == 'pet';
  }

  isvet() {
    return this.role == 'vet';
  }

  ngOnInit() {
    this.getAllApointment();

    this.getmicroservicedata();
  }

  getcurrentuser() {
    console.log(this.cognitoservice.getUser());
  }

  // vetID: number = 700;
  // petId: number = 901;

  getmicroservicedata() {
    console.log('microservice is called');

    this.allAppointment.forEach((appointment) => {
      const vetdata = this.getVet(Number(appointment.vetId));
      const petdata = this.getPetData(appointment.petId);
      console.log(appointment.vetId);
    });
  }

  getPetById(id: number) {
    return this.myObject[id];
  }

  getVetById(id: number) {
    return this.vetObject[id];
  }

  getAllApointment() {
    this.petservice.getAllAppointments(1).subscribe((data: Appointment[]) => {
      this.allAppointment = data;

      console.log(this.allAppointment);
    });
    
  }

  getSelectedOption(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    console.log(selectedOption);
    if (selectedOption == 'ALL') {
      try {
        this.getAllApointment();
      } catch (error) {
        console.log(error);
      }
      // } else {
      //   try {
      //     await this.service
      //       .getAppointmentbyFilter(this.vetID, selectedOption)
      //       .subscribe((data: Appointment[]) => {
      //         this.allAppointment = data;
      //       });
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    }
  }

  getVetData(id: number) {
    this.petservice.getVetById(id).subscribe((data: vets) => {
      console.log('hi vet');
      console.log(data);
    });
  }
   getVet(id: number) {
    this.http.get(`https://vetservice.bt.skillassure.com/api/vet/${id}`).subscribe((data) => {
      this.vetObject[id] = data;
      console.log(this.vetObject[id]);

      return data;
    });
  }

   getPetData(id: number) {
     this.service.getpetdetails(id).subscribe((data: Pet) => {
      this.myObject[id] = data;
      //  console.log(this.myObject[id]);

      return data;
    });
  }

  feedback = {
    doctorCompetenceRating: 0,
    treatmentOutcomeRating: 0,
    referthisdoctorRating: 0,
    additionalComments: '',
    appointmentProcessRating: 0,
  };
  navigate(id: number, vetId: number, petParentId: number, petId: number) {
    this.rt.navigate(['/pets/details'], {
      queryParams: {
        data: id,
        vetId: vetId,
        petParentId: petParentId,
        petId: petId,
      },
    });
  }

  onSubmit() {
    const appointmentId = 1;
    this.service.submitFeedback(appointmentId, this.feedback).subscribe(
      (response: any) => {
        console.log('Feedback submitted successfully:', response);
        this.resetForm();
      },
      (error: any) => {
        console.error('Error submitting feedback:', error);
      }
    );
  }

  resetForm() {
    this.feedback = {
      doctorCompetenceRating: 0,
      treatmentOutcomeRating: 0,
      referthisdoctorRating: 0,
      additionalComments: '',
      appointmentProcessRating: 0,
    };
  }

  currentPage: number = 1;
  cardsPerPage: number = 8;

  getPaginatedCards(): Appointment[] {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    return this.allAppointment.slice(startIndex, endIndex);
  }

  nextPage(): void {
    const totalPages = Math.ceil(
      this.allAppointment.length / this.cardsPerPage
    );
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    const totalPages = Math.ceil(
      this.allAppointment.length / this.cardsPerPage
    );
    return this.currentPage === totalPages;
  }

  goToFirstPage(): void {
    this.currentPage = 1;
  }

  goToLastPage(): void {
    const totalPages = Math.ceil(
      this.allAppointment.length / this.cardsPerPage
    );
    this.currentPage = totalPages;
  }
}
