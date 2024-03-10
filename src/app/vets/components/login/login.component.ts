import { Component, ViewChild } from '@angular/core';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatHint } from '@angular/material/form-field';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { formatDate } from '@angular/common';
import { VetService } from '../../services/vet.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterOutlet, RouterModule, CommonModule, HttpClientModule, MatDatepickerModule, MatFormField, MatNativeDateModule, MatHint,MatDatepickerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  posts: any;
  page: number = 1;
  count: number = 0;
  tablesize: number = 3;
  tablesizes: any = [4, 8, 12, 16, 20];
  items: any
  @ViewChild('picker') picker!: MatDatepicker<any>;
  selectedDate: Date | null = null;
  // getDate(): void {
  //   if (this.picker && this.picker._selected) {
  //     this.selectedDate = this.picker._selected._d; // Access the selected date from the picker
  //     console.log('Selected date:', this.selectedDate);
  //   }
  // }

  AllAppointments = [
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years", pet:"John Doe",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/cat.png", name:"Bessy", title:"Female, 2.2 years", pet:"John Doe",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/hamster.png", name:"Henry", title:"Male, 1 years", pet:"Wane Doe",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/hamster.png", name:"Doggo", title:"Male, 2.2 years", pet:"Wane Doe",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years", pet:"John Doe",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/cat.png", name:"Henry", title:"Female, 2.2 years", pet:"Sally Doe",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years", pet:"Sally Doe",time:"18:05",date:"2014-12-12"}
  ]

  constructor(private loginService: VetService) { }
  ngOnInit() {
    this.loginService.getAppointments().subscribe((results) => {
      this.items = results;
      console.log(this.items);
      this.posts = results;
    });
    this.loginService.getappointementsbydate().subscribe((results) => {
      this.items = results;
      console.log(this.items);
      this.posts = results;
    });
  }
  ontabeldatachange(event: any) {
    this.page = event;

  }

  ontablesizecahnge(event: any): void {
    this.tablesize = event.target.value;
    this.page = 1;
  }
  // getallappointments() {
  //   this.Allappointments().subscribe((response) => {
  //     this.posts = response;
  //     console.log(response);
  //     this.items.push(response);
  //   });

}
// constructor(private login:LoginserviceService){}
// checkform(email:string,pass:string){
//   if(email=="root" && pass=="root"){
//   this.login.status=true;
//   console.log(this.login.status)
//   }
//   else{
//     this.login.status=false;
//   }
//   return false;
// }


// items = [
//   { name: 'Item 1', image: 'p2.png' },
//   { name: 'Item 2', image: 'p5.jpg' },
//   // add more items as needed
// ];




