import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from './interfaces/person.model';
import { Planet } from './interfaces/planet.model';
import { Film } from './interfaces/films.model';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private apiUrl: string = environment.apiUrl;

  private selectedEntitySource = new BehaviorSubject<any>(null);
  selectedEntity$ = this.selectedEntitySource.asObservable();

  constructor(private http:HttpClient) { }

  selectEntity(entity: any) {
    this.selectedEntitySource.next(entity);
  }


  getDataById<T>(id:number, entity: string){
    return this.http.get<T>(`${this.apiUrl}/${entity}/${id}`);
  }
  getPeople(pageNum:number):Observable<Person> {
    const params = new HttpParams().set('page', pageNum);
    return this.http.get<Person>(`${this.apiUrl}/people`,{params});
  }
  getPlanets(pageNum:number):Observable<Planet> {
    const params = new HttpParams().set('page', pageNum);
    return this.http.get<Planet>(`${this.apiUrl}/planets`,{params});
  }
  getFilms(pageNum:number):Observable<Film> {
    const params = new HttpParams().set('page', pageNum);
    return this.http.get<Film>(`${this.apiUrl}/films`,{params});
  }
}
