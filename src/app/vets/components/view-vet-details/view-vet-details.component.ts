import { Component } from '@angular/core';
import { VetService } from '../../services/vet.service';
import { Vet } from '../../models/vet';
import { Clinic } from '../../../shared/models/clinic';
import { ClinicService } from '../../../shared/services/clinic/clinic.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { EditDoctorComponent } from "../edit-doctor/edit-doctor.component";

@Component({
    selector: 'app-view-vet-details',
    standalone: true,
    templateUrl: './view-vet-details.component.html',
    styleUrl: './view-vet-details.component.css',
    imports: [CommonModule, RouterLink, RouterOutlet, EditDoctorComponent]
})
export class ViewVetDetailsComponent {
  id: any;
  
  clinic :Clinic = new Clinic()
  vet:Vet = new Vet()
  constructor(private vetService:VetService,private clinicService:ClinicService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.queryParamMap);
    
    this.id = this.route.snapshot.queryParamMap.get('id');
    
   }

  ngOnInit() {
    this.vetService.getVetDetails(this.id).subscribe(vet => this.vet = vet);
    this.clinicService.getClinicDetailsByVetId(this.id).subscribe(clin => this.clinic = clin);
    console.log(this.clinicService.getClinicDetailsByVetId(this.id).subscribe(clin => this.clinic = clin))
  }
  
    getVet() {
      this.vetService.getVetDetails(this.id).subscribe(data => this.vet = data);
      console.log(this.vetService.getVetDetails(this.id))
    }
   
    updateDetails() {
      this.vetService.editVetDetails(this.vet).subscribe(data => this.vet = data);
    }

    ishide: boolean = false;
    ishow: boolean = true;
    show(){
      this.ishide = !this.ishide;
      this.ishow = !this.ishow;
    }
}
