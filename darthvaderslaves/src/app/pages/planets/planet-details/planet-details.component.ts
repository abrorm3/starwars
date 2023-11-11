import { Component } from '@angular/core';
import { Planet } from 'src/app/shared/interfaces/planet.model';
import { PlanetsService } from '../planets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent {
  planet!: Planet;
  id!: number;

  defaultImageSrc = 'assets/icons/light-saber.png';
  constructor(private planetService:PlanetsService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.attachRouterId();
    this.planetService.getDataById(this.id).subscribe((data)=>{
      this.planet = data;
      console.log(this.planet);

    })

  }
  attachRouterId(){
    // this.planetService.getCurrentPage()
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

      // this.planetService.getplanetId(id);
    });
  }
  getImagePath(): string {
    return `assets/planets/${this.id}.jpg`;
  }
  getEntityId(entityId: string): string {
    const id = this.extractIdFromUrl(entityId);
    return `${id}`;
  }

  getImageUrl(residentUrl: string, entity:string): string {
    const id = this.extractIdFromUrl(residentUrl);
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
