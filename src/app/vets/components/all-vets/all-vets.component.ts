import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Vet } from '../../models/vet';
import { VetService } from '../../services/vet.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-all-vets',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './all-vets.component.html',
  styleUrl: './all-vets.component.css'
})
export class AllVetsComponent {

  AllVets :Vet[] = []
  HighRatedVets: Vet[] = [];

  constructor(private vetService:VetService){}

  ngOnInit(){
    this.vetService.getHighRatedVets().subscribe(vet => this.HighRatedVets = vet);
    this.vetService.getAllVets().subscribe(data=>this.AllVets = data)
  }
 
  getVetDetails(id:number){
    this.vetService.getVetDetails(id);
  }
 
  getAllVets(){
    this.vetService.getAllVets();
  }
 
  editVet(vet:Vet){
    this.vetService.editVetDetails(vet);
  }
 
  getAppointmentHistory(id:number){
    this.vetService.getAppointmentHistory(id);
  }
 
  getRecentlyConsultedVets(){
    this.vetService.getRecentlyConsultedVets();
  }
 
  // getHighRatedVets(){
  //   this.vetService.getHighRatedVets().subscribe(data => this.highRatedVets = data);
  // }
}
