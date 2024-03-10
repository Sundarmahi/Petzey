import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clinic } from '../../models/clinic';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private http:HttpClient) { }

  getClinicDetailsByVetId(id:number): Observable<Clinic> {
    return this.http.get<Clinic>(`${environment.clinic}/${id}`);
  }
}
