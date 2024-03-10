import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vet-profile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './vet-profile.component.html',
  styleUrl: './vet-profile.component.css'
})
export class VetProfileComponent {
  name:any;
  url:any;
  number:any;
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.url = this.route.snapshot.queryParamMap.get('url');
    this.number = this.route.snapshot.queryParamMap.get('number');
  }
  AllAppointments = [
    {url:"./assets/Ellipse 1.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/Ellipse 2.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/Ellipse 3.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/Ellipse 2.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/Ellipse 1.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/Ellipse 3.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/Ellipse 1.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"}
  ]

  scrollItems = [
    'Herb Costales',
    'Gloria Cherie',
    'Paraskeva Goran',
    'Paskal',
    'Nadia',
    'Lyudmila',
    'Mihaela',
    'Snezhana',
    'Katya',
    'Ekaterina',
    'Milena',
    'Nedyalka',
    'Nadejda',
    'Hristina',
    'Denica',
    'Gabriela',
    'Kuzman',
    'Roza',
    'Genko',
    'Lyubomir',
    'Tereza',
    'Eva',
    'Zara',
    'Mila']
}
