import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { Pet } from '../../../pets/models/pet';
import { PetParent } from '../../../pets/models/pet_parent';
import { AppointmentService } from '../../services/appointment-service';
import { Vet } from '../../../vets/models/vet';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { error } from 'console';


@Component({
    selector: 'app-new-appointment',
    standalone: true,
    templateUrl: './new-appointment.component.html',
    styleUrls: ['./new-appointment.component.css'],
    styles:[`input.ng-invalid{border-left:5px solid red;}
    input.ng-valid{border-left: 5px solid green;}` ],
    
    imports: [CommonModule, RouterOutlet, RouterLink, FormsModule, NgFor, HeaderComponent]
})
export class NewAppointmentComponent {
  errorMessage:string=''
  appointmentForm:any
  minDate: string=''
  petParentId: number = 1;
  selectedPetId: number = 0;
  selectedVetId: number = 0;
  selectedButton: string = '09:00';
  newAppointment: Appointment = new Appointment();
  pets: Pet[] = [];
  petParent: PetParent = new PetParent;
  vets: Vet[] = []
  time: Date = new Date();
  constructor(private service: AppointmentService) {
    this.setMinDate();
  }
  setMinDate(): void {
    const today = new Date();
    const month = today.getMonth() + 1; 
    const day = today.getDate();
    const year = today.getFullYear();

    this.minDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }


  selectButton(time: string) {
    this.selectedButton = time;
    const [hours, minutes] = time.split(':').map(Number);
    this.time.setHours(hours);
    this.time.setMinutes(minutes);
    this.newAppointment.appointment_time=time
    localStorage.setItem("time", this.selectedButton);
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
    this.service.getPets(this.petParentId).subscribe(data => {
      this.pets = data;
    })

    this.service.getAllVets().subscribe(data => {
      this.vets = data;
    })
  }

  onSumbitForm():void{
    this.newAppointment.appointmentDate=this.time
    this.newAppointment.appointment_time = `${this.newAppointment.appointment_time}`;
    this.service.addAppointment(this.newAppointment,this.selectedVetId,1,this.selectedPetId).subscribe(data =>{
    },
    (error) =>{
      this.errorMessage=error.message;
    });
   

  }
 


 

}