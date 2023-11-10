import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getDataById(id:number){
    console.log(this.http.get<Person>(`${this.apiUrl}/people/${id}`));

    return this.http.get<Person>(`${this.apiUrl}/people/${id}`);
  }
}
