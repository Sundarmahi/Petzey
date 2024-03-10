import { PetParent } from "./pet_parent"

export class Pet{
    petId:number = 0;
    petName: String = "";
    breed: string = "";
    gender: String = "";
    age:number= 0;
    bloodGroup: String = "";
   
    dateOfBirth: Date = new Date();
    allergies:String = "";
    petParent: PetParent = new PetParent;
    petType: string="";
    petBreed: string="";
    petGender: string="";
    petAge: number=0;
    petBloodGroup: string="";
    petDateOfBirth: string="";
   
  }