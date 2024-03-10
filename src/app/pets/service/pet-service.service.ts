import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { environment } from '../../../environments/environment';
import { PetParent } from '../models/pet_parent';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Appointment } from '../../appointments/models/appointment';
import { Vet } from '../../vets/models/vet';
import { vets } from '../models/vetdata';

@Injectable({
  providedIn: 'root',
})
export class PetServiceService {
  petURL = environment.PetURL;
  constructor(private http: HttpClient) {}

  addPet(parentId: number, newPet: any) {
    console.log('inside service add pet');
    console.log(newPet);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.petURL + `/postpet/1`, newPet);
  }

  public updatePet(PetData: any) {
    return this.http.put(this.petURL + `/Pet`, PetData);
  }

  public updateParent(PetParent: any) {
    return this.http.put(this.petURL + `/Petparent`, PetParent);
  }

  public getPetInfoById(petId: string) {
    return this.http.get(this.petURL);
  }

  public getParentbyId(id: number) {
    return this.http.get(this.petURL + `/getParentByID/${id}`);
  }

  getPetList() {
    return this.http.get(this.petURL + `/getAll`);
  }

  public removePetz(PetData: Pet) {
    return this.http.delete(this.petURL + '/delete/' + PetData);
  }

  getAllAppointments(id: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(
      `https://appointmentservice.bt.skillassure.com/appointment/getallAppointmentByParentId/${id}`
    );
  }

  getVetById(id: number): Observable<vets> {
    return this.http
      .get(` https://apigateway.bt.skillassure.com/Vet/api/vet/${id}`)
      .pipe(
        map((response) => response as vets),
        catchError((error) => {
          console.error('Error fetching vet:', error);
          return throwError(error);
        })
      );
  }
}
