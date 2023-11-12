import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


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
  getEntityData<T>(pageNum:number, entity:string):Observable<T>{
    const params = new HttpParams().set('page', pageNum);
    return this.http.get<T>(`${this.apiUrl}/${entity}`,{params});
  }
}
