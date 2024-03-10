import { Injectable } from '@angular/core';
import { AppointmentSummary } from '../../models/appointment_summary';
import { Appointment } from '../../models/appointment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { FeedbackFormModel } from '../../models/feedback';
import { Vet } from '../../../vets/models/vet';
import { Pet } from '../../../pets/models/pet';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  url = environment.domain;
  vetUrl=environment.vetdomain;
  petUrl = environment.petdomain;

  getAppointmentSummary(id:number): Observable<AppointmentSummary> {
   return  this.http.get<AppointmentSummary>(`${this.url}summary/${id}`)
  }

  

  getAllAppointments(id:number):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}`+"getallByVet/"+id)
  }

  getAllAppointmentsbypetId(id:number):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}`+"getallByPet/"+id)
  }

  getAppointmentbyFilter(id:number,status:string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}getstatusbyvet/${id}/${status}`)
  }

  submitFeedback(appointmentId: number, feedbackData: FeedbackFormModel): Observable<any> {
    return this.http.post<any>(`${this.url}feedback/${appointmentId}`, feedbackData);
  }

  getvetdetails(id:number):Observable<Vet>{
    return this.http.get<Vet>(`${this.vetUrl}/vet/${id}`);
  }

  getpetdetails(id:number):Observable<Pet>{
    return this.http.get<Pet>(`${this.petUrl}/get/${id}`);
  }
  
  getallVet():Observable<Vet>{
    return this.http.get<Vet>(`${this.vetUrl}/get/vet`);
  }
}
// 