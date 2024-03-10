import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  hide : boolean = false;

  togglebar() {
    this.hide =!this.hide;
  }
  AllVets = [
    {url:"assets/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 2.svg", name:"Dr. Sally Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 3.svg", name:"Dr. John Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 2.svg", name:"Dr. William Smith", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 3.svg", name:"Dr. William Smith", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 2.svg", name:"Dr. John Doe", title:"Navle", number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
  ]
  HighRatedVets = [
    {url:"assets/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle", number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 2.svg", name:"Dr. Sally Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 3.svg", name:"Dr. John Doe", title:"Navle", number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/Ellipse 1.svg", name:"Dr. Sally Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
  ]
}
