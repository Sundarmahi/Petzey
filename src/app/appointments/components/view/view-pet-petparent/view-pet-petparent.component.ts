import { Component } from '@angular/core';
import { ViewVetComponent } from '../view-vet/view-vet.component';
import { AppointmentService } from '../../../services/appointment-service';
import { Appointment } from '../../../models/appointment';
import { Pet } from '../../../../pets/models/pet';
import { PetParent } from '../../../../pets/models/pet_parent';
import { Vet } from '../../../../vets/models/vet';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { PetServiceService } from '../../../../pets/service/pet-service.service';
import { ClinicService } from '../../../../shared/services/clinic/clinic.service';
import { Clinic } from '../../../../shared/models/clinic';

@Component({
  selector: 'app-view-pet-petparent',
  standalone: true,
  imports: [ViewVetComponent],
  templateUrl: './view-pet-petparent.component.html',
  styleUrl: './view-pet-petparent.component.css'
})
export class ViewPetPetparentComponent {
  petParentId: number = 0
  petId: number = 0;
  vetId: number = 0;
  constructor(private appointmentService: AppointmentService, private rt: ActivatedRoute,
              private petService: PetServiceService,private clinicService: ClinicService) { }
  petParent: PetParent = new PetParent;
  vet: Vet = new Vet;
  pet: Pet = new Pet;
  clinic:Clinic = new Clinic;

  ngOnInit() {
    this.rt.queryParams.subscribe(params => {
      this.petParentId = params['petParentId'];
      this.petId = params['petId'];
      this.vetId = params['vetId'];
    })
    this.appointmentService.getPetParentById(this.petParentId).subscribe(data => {
      this.petParent = data;
      console.log("dd" + this.petParent.petParentAddress);
      console.log("pet parent: " + data);

    },
    (error) => {
      alert(error)
    })
    this.appointmentService.getVetById(this.vetId).subscribe(data => {
      this.vet = data;
      console.log("vet: " + data);
    })

    this.appointmentService.getPetById(this.petId).subscribe(data => {
      this.pet = data;
      console.log("pet: " + this.pet);
      
    })

    this.clinicService.getClinicDetailsByVetId(this.vetId).subscribe(data => {
      this.clinic = data;
      console.log("clinic: " + this.clinic);
    })

  }

}
