import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vet } from '../../vets/models/vet';
import { Pet } from '../../pets/models/pet';
import { PetParent } from '../../pets/models/pet_parent';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {

  }
  app:Appointment=new Appointment

  url = environment.domain;
  getAppointmentDetails(id: number): Observable<Appointment>  {

    //1. create the httpclient object
    

    //2. call the backend apis (never hard code the url)

   return this.http.get<Appointment>(this.url + `get/` + id);
    
    

    //3. create appointment  object

   

    //4. store the data recieved in apppointment  object

    //5. return the appointment object
   
  }

  addAppointment(appointmentDetails: Appointment,vetId:number,petParentId:number,petId:number): Observable<Appointment> {
    let jsonData=JSON.stringify(appointmentDetails);

    console.log(jsonData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Appointment>(environment.domain+'save/'+vetId+"/"+petParentId+"/"+petId,jsonData, {headers});

  }

  editAppointment(appointmentDetails: Appointment): Observable<Appointment> {

    return this.http.put<Appointment>(this.url+'edit',appointmentDetails);

  }


  allAppointments: Appointment[] = [];

  getAllAppointments(): Appointment[] {
    return this.allAppointments
  }

  close_appointment(id: number): Observable<any> {
    return this.http.patch(`${this.url}close/${id}`,{});
  }

  cancel_appointment(id: number): Observable<Appointment>{
    return this.http.patch<Appointment>(`${this.url}cancel/${id}`,{});
  }

getVetById(id:number): Observable<Vet> {
  return this.http.get<Vet>(environment.vet+id);
}

getPets(id:number): Observable<Pet[]> {
  return this.http.get<Pet[]>(environment.pet3+"getpetByParentId/"+id);

}

getPetById(id:number): Observable<Pet> {  
  return this.http.get<Pet>(environment.pet3+"get/"+id);
}
getPetParentById(id:number): Observable<PetParent> {
  return this.http.get<PetParent>(environment.pet3+"getParentByID/"+id);
}

getAllVets():Observable<Vet[]> {
  return this.http.get<Vet[]>(environment.vet+'get');
}


}