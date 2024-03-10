import { Component } from '@angular/core';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment-service';
import { Vet } from '../../../../vets/models/vet';
import { error } from 'console';
import { ActivatedRoute } from '@angular/router';
import { PetParent } from '../../../../pets/models/pet_parent';
import { Pet } from '../../../../pets/models/pet';

@Component({
  selector: 'app-view-vet',
  standalone: true,
  imports: [],
  templateUrl: './view-vet.component.html',
  styleUrl: './view-vet.component.css'
})
export class ViewVetComponent {
  id: number = 0;
  constructor(private appointmentService: AppointmentService, private rt: ActivatedRoute) { }
  vet: Vet = new Vet;



  petParentId: number = 0
  petId: number = 0;
  petParent: PetParent = new PetParent;
  pet: Pet = new Pet;
  ngOnInit() {
    this.rt.queryParams.subscribe(params => {
      this.id = params['vetId'];
    })
    this.appointmentService.getVetById(this.id).subscribe(data => {
      this.vet = data
      console.log(data);
    },
      (error) => {
        console.log(error);

      })

      this.rt.queryParams.subscribe(params => {
        this.petParentId = params['petParentId'];
        this.petId = params['petId'];
      })
      // this.appointmentService.getAppointmentDetails(this.petParentId).subscribe(data => {
      // })
      this.appointmentService.getPetParentById(this.petParentId).subscribe(data => {
        this.petParent = data;
        this.petParent.pets.forEach(pet => {
          if (pet.petId == this.petId) {
            this.pet = pet;
          }
        })
        console.log(data);
  
      })

  }

}
