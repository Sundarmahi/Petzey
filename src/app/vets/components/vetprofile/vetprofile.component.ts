import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ViewVetDetailsComponent } from "../view-vet-details/view-vet-details.component";
import { LoginComponent } from "../login/login.component";
import { Clinic } from '../../../shared/models/clinic';
import { Vet } from '../../models/vet';
import { VetService } from '../../services/vet.service';

@Component({
    selector: 'app-vetprofile',
    standalone: true,
    templateUrl: './vetprofile.component.html',
    styleUrl: './vetprofile.component.css',
    imports: [RouterOutlet, RouterLink, CommonModule, ViewVetDetailsComponent, LoginComponent]
})
export class VetprofileComponent {
  clinic = new Clinic()
  vetData = new Vet();
   
    constructor(private vetService: VetService) {

     }
    getVet() {
      this.vetService.getVetDetails(700).subscribe(data => this.vetData = data);
    }
   
    updateDetails() {
      this.vetService.editVetDetails(this.vetData).subscribe(data => this.vetData = data);
    }
}
