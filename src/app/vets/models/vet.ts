import { Clinic } from "../../shared/models/clinic";

export class Vet{
    subscribe(arg0: (data: any) => any) {
      throw new Error('Method not implemented.');
    }
    vetId: number=0;
    vetName: String='';
    mobileNo: string='';
    email: string='';
    speciality: string='';
    rating: number=0;
    imgUrl:string='';
    clinicName:string=''
    vetPhone:string=''


//     constructor(vetId: number, vetName: String,mobileNo: string, email: string, speciality: string, rating: number, imgUrl:string){
//         this.vetName = vetName;
//         this.vetId = vetId;
//         this.mobileNo = mobileNo;
//         this.email = email;
//         this.speciality = speciality;
//         this.rating = rating;
//         this.imgUrl = imgUrl;
//     }
 }