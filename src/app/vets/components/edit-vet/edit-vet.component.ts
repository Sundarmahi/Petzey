import { Component } from '@angular/core';
import { Clinic } from '../../../shared/models/clinic';
import { Vet } from '../../models/vet';
import { VetService } from '../../services/vet.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-vet',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './edit-vet.component.html',
  styleUrl: './edit-vet.component.css'
})
export class EditVetComponent {
    
    clinic = new Clinic()
    vetData = new Vet();
   
    constructor(private vetService: VetService) {

     }
    getVet() {
      this.vetService.getVetDetails(3).subscribe(data => this.vetData = data);
    }
   
    updateDetails() {
      this.vetService.editVetDetails(this.vetData).subscribe(data => this.vetData = data);
    }
}
