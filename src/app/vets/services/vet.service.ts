import { Injectable } from '@angular/core';
import { Vet } from '../models/vet';
import { Appointment } from '../../appointments/models/appointments';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Clinic } from '../../shared/models/clinic';

@Injectable({
  providedIn: 'root'
})
export class VetService {
  
  vets: Vet[] = [];
 
  appointment: Appointment = new Appointment;
 
   vetDetails:Vet = new Vet();


  vetsApi:string = environment.vet
  clinicApi:string = environment.clinic
  appointmentApi:string = environment.domain
  constructor( private http: HttpClient) { }
 
   getAllVets():Observable<Vet[]>{
    return this.http.get<Vet[]>(`${this.vetsApi}/get`)
  }

  getClinicByVetId(id:number):Observable<Clinic>{
    console.log(this.clinicApi)
    return this.http.get<Clinic>(`${this.clinicApi}/${id}`);
  }
 
  getVetDetails(id:number):Observable<Vet>{
    //1. call backend apis
 
    //2. store the data recieved in vets object
 
    //3. return the vets object
 
    return this.http.get<Vet>(`${this.vetsApi}/${id}`);
  }
 
  getRecentlyConsultedVets(){
    //1. call backend apis
    //2. store the data recieved in vets object
 
    //3. return the vets object
    return null;
  }
 
  getHighRatedVets():Observable<Vet[]>{
    //1. call backend apis
    const a = this.http.get<Vet[]>(`${this.vetsApi}/getHighlyRated`);
 
    //2. store the data recieved in vets object
 
    //3. return the vets object
    return a;
  }
 
  editVetDetails(vet:Vet):Vet{
    //1. call backend apis
 
    //2. store the data recieved in vet object
 
    //3. return the vets object
    return this.vetDetails;
  }
 
  getAppointmentHistory(vetId:number):Appointment{
    //1. call backend apis
 
    //2. store the data recieved in vets object
 
    //3. return the vets object
    return this.appointment;
  }

  id: number = 111;
  date: string = '11-01-2001';
 
  getAppointments() {
    return this.http.get(`${this.appointmentApi}` + this.id);
  }
  getappointementsbydate() {
    return this.http.get('http://localhost:8088/api/vet/' + this.id + '/appointments/date/' + this.date);
  }
}
