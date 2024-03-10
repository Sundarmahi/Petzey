import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { EditPetparentComponent } from '../edit-petparent/edit-petparent.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

import { PetServiceService } from '../../service/pet-service.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css',
  imports: [
    FormsModule,
    CommonModule,
    EditPetparentComponent,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    HttpClientModule,
  ],
})
export class ProfilepageComponent implements OnInit {
  getallpets: any;

  petForm: FormGroup;
  petParentName: any;
  constructor(
    private petService: PetServiceService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.petForm = this.fb.group({
      petName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-z]*$'),
        ],
      ],
      petAge: ['', [Validators.required]],
      petspce: ['', [Validators.required]],
      petGender: ['', [Validators.required]],
      bloodgroup: ['', [Validators.required]],
      dateOfbirth: ['', Validators.required],
      Allergies: ['', Validators.required],
    });
    this.get();
    this.getParent(1);
    this.getPetBasedonParentId(1);
    // this.editParent();
  }

  petinfo: any = {
    petName: '',
    breed: '',
    gender: '',
    age: 0,
    bloodGroup: '',
    dateOfBirth: new Date(),
    allergies: '',
  };

  parentinfo: any = {
    petParentName: '',
    phoneNumber: '',
    address: '',
    gender: 'Mr',
    petParentId: 0,
  };

  showForm = false;

  addPet() {
    this.petService.addPet(1, this.petinfo).subscribe((res) => {
      console.log(this.petinfo);
    });
  }

  ngOnInit() {
    this.getParent(1);
  }

  get() {
    this.petService.getPetList().subscribe((res) => {
      console.log(res);
      this.getallpets = res;
    });
  }

  PetParent = {
    petParentId: 0,
    petParentName: '',
    phoneNumber: '',
    gender: 'Mr',
    address: '',
    email:''
  };

  getParent(pid: number) {
    this.petService.getParentbyId(pid).subscribe((response: any) => {
      this.PetParent = response;
    });
  }

  openForm() {
    this.showForm = true;
   
      this.putdata.petParentName = this.PetParent.petParentName;
      this.putdata.phoneNumber=this.PetParent.phoneNumber;
      this.putdata.address=this.PetParent.address;
      this.putdata.gender=this.PetParent.gender;
      this.putdata.email=this.PetParent.email;
    
  }

  closeForm() {
    this.showForm = false;
  }

  putdata = {
    petParentId: 1,
    petParentName: '',
    phoneNumber: '',
    address: '',
    gender: 'Mr',
    email: '',
  };

  updatdePetparent(event: any) {

    console.log(this.putdata);
    if (confirm('Are you want to update this data')) {
      this.petService.updateParent(this.putdata).subscribe(() => {
        console.log(this.putdata);
        alert('update');
      });
    }
  }

  putpet = {
    petId: 1,
    petName: '',
    breed: '',
    gender: '',
    age: 0,
    bloodGroup: '',
    dateOfBirth: new Date(),
    allergies: '',
    petParent: {
      petParentId: 1,
      petParentName: '',
      phoneNumber: '',
      gender: 'Mr',
      address: '',
    },
  };

  jdata = {
    petId: 1,
    petName: '',
    breed: '',
    gender: '',
    age: 0,
    bloodGroup: '',
    dateOfBirth: new Date(),
    allergies: '',
    petParent: {
      petParentId: 1,
      petParentName: '',
      phoneNumber: '',
      gender: 'Mr',
      address: '',
    },
  };

  updatefetch(id: number) {
    const c = this.getpetsbasedonparentid.find((p: Pet) => {
      return p.petId == id;
    });

    this.jdata.petId = c.petId;
    this.jdata.petName = c.petName;
    this.jdata.breed = c.breed;
    this.jdata.gender = c.gender;
    this.jdata.age = c.age;
    this.jdata.bloodGroup = c.bloodgroup;
    this.jdata.dateOfBirth = c.dateOfBirth;
    this.jdata.allergies = c.allergis;

    this.jdata.petParent.petParentId = 1;
  }

  updatdePet(event: any) {
    if (confirm('Are you want to update this data')) {
      console.log(this.jdata);
      this.petService.updatePet(this.jdata).subscribe(() => {
        console.log(this.jdata);
        alert('update');
      });
    }
  }
  getpetsbasedonparentid: any;
  getPetBasedonParentId(parentId: number) {
    this.http
      .get(
        `https://petservice.bt.skillassure.com/pet/getpetByParentId/${parentId}`
      )
      .subscribe((response: any) => {
        this.getpetsbasedonparentid = response;
        console.log(this.getpetsbasedonparentid);
      });
  }
}
