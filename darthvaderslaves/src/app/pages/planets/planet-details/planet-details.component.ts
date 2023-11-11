import { Component } from '@angular/core';
import { Planet } from 'src/app/shared/interfaces/planet.model';
import { PlanetsService } from '../planets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent {
  planet!: Planet;
  id!: number;

  defaultImageSrc = 'assets/icons/light-saber.png';
  constructor(private swapiService:SwapiService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.attachRouterId();
    this.swapiService.getDataById<Planet>(this.id, 'planets').subscribe((data)=>{
      this.planet = data;
    })

  }
  attachRouterId(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  getImagePath(): string {
    return `assets/planets/${this.id}.jpg`;
  }
  getEntityId(entityId: string): string {
    const id = this.extractIdFromUrl(entityId);
    return `${id}`;
  }

  getImageUrl(entityUrl: string, entity:string): string {
    const id = this.extractIdFromUrl(entityUrl);
    return `assets/${entity}/${id}.jpg`;
  }

  private extractIdFromUrl(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 2];
  }
  navigateToPlanets(){
    const pageNumber = this.calculatePageNumber(this.id);
    this.router.navigate(['/planets'], { queryParams: { page: pageNumber } })
  }
  calculatePageNumber(id: number): number {
    return Math.floor((id - 1) / 10) + 1;
  }
  setDefaultImage(event:any){
    event.target.src = this.defaultImageSrc;
  }
}
