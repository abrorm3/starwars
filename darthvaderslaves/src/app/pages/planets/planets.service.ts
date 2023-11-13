import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Planet } from 'src/app/shared/interfaces/planet.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getDataById(id:number){
    return this.http.get<Planet>(`${this.apiUrl}/planets/${id}`);
  }
  getPlanetName(id:string){
    const planetUrl = `${this.apiUrl}planets/${id}/`;
    return this.http.get<Planet>(planetUrl).pipe(
      map(response => response.name)
    );

  }
}
