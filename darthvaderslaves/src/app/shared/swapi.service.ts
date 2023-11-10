import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from './interfaces/person.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private apiUrl: string = environment.apiUrl;

  private selectedEntitySource = new BehaviorSubject<any>(null);
  selectedEntity$ = this.selectedEntitySource.asObservable();

  selectEntity(entity: any) {
    this.selectedEntitySource.next(entity);
  }

  constructor(private http:HttpClient) { }

  getPeople():Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/people`);
  }
}