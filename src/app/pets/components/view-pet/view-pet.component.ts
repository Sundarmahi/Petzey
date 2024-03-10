import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { PetServiceService } from '../../service/pet-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pet } from '../../models/pet';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { PetParent } from '../../models/pet_parent';

@Component({
  selector: 'app-view-pet',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet, RouterLink],
  templateUrl: './view-pet.component.html',
  styleUrl: './view-pet.component.css'
})
export class ViewPetComponent implements OnInit {
  // getallpets: any;

  AllAppointments = [
    {url:"./assets/Ellipse 1.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/img/pet2.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/img/pet3.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/img/pet1.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/img/pet3.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/img/pet2.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"},
    {url:"./assets/img/pet3.svg", name:"DR. John Doe", title:"Navle", pet:"Doggo",time:"18:05",date:"2014-12-12"}
  ]

  petname :any;
  age : any;
  bloodgroup: any;
  gender: any;
  dateofbirth: any;

   constructor(
    private petService:PetServiceService,
    private http:HttpClient, 
    private route: ActivatedRoute,){
   }
  

   ngOnInit() {
    this.getParent(1);

   
    this.getParent(1);
    console.log("inside view pet")
    console.log(this.route.snapshot.queryParamMap.get('gender'));
    this.petname = this.route.snapshot.queryParamMap.get('petName');
    this.age = this.route.snapshot.queryParamMap.get('age');
    this.bloodgroup = this.route.snapshot.queryParamMap.get('bloodGroup');
    this.gender = this.route.snapshot.queryParamMap.get('gender');
    this.dateofbirth = this.route.snapshot.queryParamMap.get('dateOfBirth');

    
 
  }
   petparent: any= {
     petParentId: 1,
     petParentName: '',
     phoneNumber: '',
     gender: 'Mr',
     address: '',
   };
 
  getParent(pid: number) {
   
    this.http
      .get(`https://petservice.bt.skillassure.com/pet/getParentByID/${pid}`)
      .subscribe((response: any) => {
        this.petparent = response;
 
       
      });
     
  }
  

   petinfo:any={
    petId: 1,
     petName: "",
     breed: "",
     gender: "",
     age: 0,
     bloodGroup: "",
     dateOfBirth: new Date,
     allergies:'',
     petparent:this.petparent
    
   }
  //  getPet(pid:number){
  //   this.http.get(`http://localhost:8082/pet/getParentByID/{petParentId}`).subscribe(
  //     (response : any) => {
  //       this.petinfo=response;
  //       console.log(response);
  // })
  // }

  // getPet(): void {
  //   console.log("inside orderDetail")
  //   //console.log(this.orderService.getOrder(this.orderNo));
  //   this.petService.getPetInfoById(this.petid).subscribe(
  //     (info: any) => {
  //       this.petinfo = info;
  //       console.log('Fetched pet info:', this.petinfo);
       
  //     },
  //     (error) => {
  //       console.error('Error fetching order:', error);
  //     }
  //   );
  // }

  
  

 
 
  
 
 
  
 }







