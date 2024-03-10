import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pet } from '../../../pets/models/pet';
import { PetServiceService } from '../../../pets/service/pet-service.service';

@Component({
  selector: 'app-all-pets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-pets.component.html',
  styleUrl: './all-pets.component.css'
})
export class AllPetsComponent {

  AllPets = [
      {url:"assets/images/Doggo.png", petName:"Doggo", title:"Male, 2.2 years",  petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/cat.png", petName:"Bessy", title:"Female, 2.2 years",  petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/Doggo.png", petName:"Doggo", title:"Male, 2.2 years",  petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/lizo.png", petName:"Lizo", title:"Male, 1 years",  petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/lizo.png", petName:"Lizo", title:"Male, 1 years",  petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/hamster.png", petName:"Henry", title:"Female, 1 years", petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/Doggo.png", petName:"Doggo", title:"Male, 2.2 years", petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/Doggo.png", petName:"Doggo", title:"Male, 2.2 years",  petParent:"John Doe",time:"18:05",date:"2014-12-12"},
    ]
    RecentlyConsulted = [
      {url:"assets/images/Doggo.png", petName:"Doggo", title:"Male, 2.2 years", petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/cat.png", petName:"Bessy", title:"Female, 2.2 years",  petParent:"John Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/hamster.png", petName:"Henry", title:"Female, 1 years", petParent:"Wane Doe",time:"18:05",date:"2014-12-12"},
      {url:"assets/images/cat.png", petName:"Bessy", title:"Female, 2.2 years",  petParent:"Wane Doe",time:"18:05",date:"2014-12-12"},
    ]

  allPet :Pet[] = []

  // allPet :any

  constructor(private petService:PetServiceService){}

  // ngOnInit(){
  //   this.petService.getPetList().subscribe(data=> this.allPet = data)
  // }
}
