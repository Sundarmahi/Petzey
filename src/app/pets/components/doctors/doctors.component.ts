import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Vet } from '../../../vets/models/vet';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
})
export class DoctorsComponent {
  constructor(private http: HttpClient) {
   this.getAllVets();
    this.getHighlyRated();
  //  this.sortByRatings();
  }
  hide: boolean = false;
 
  togglebar() {
    this.hide = !this.hide;
  }
  AllVets: any;
  highlyRatedVets:any;
 
  getAllVets() {
    this.http
      .get(`https://apigateway.bt.skillassure.com/Vet/api/vet/get`)
      .subscribe((res) => {
        this.AllVets = res;
        console.log(res);
      });
  }
 
 
   getHighlyRated()
  {
    console.log(this.highlyRatedVets);
    this.http
    .get(`https://apigateway.bt.skillassure.com/Vet/api/vet/getHighlyRated`)
    .subscribe((res) => {
      this.highlyRatedVets = res;
     
      console.log(res);
    });
  }
  sortByRatings() {
    this.highlyRatedVets.sort((a:Vet, b:Vet) => b.rating - a.rating); // Sorting in descending order based on ratings
  }
}
