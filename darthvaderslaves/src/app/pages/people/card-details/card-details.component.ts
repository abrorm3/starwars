import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SwapiService } from 'src/app/shared/swapi.service';
import { PlanetsService } from '../../planets/planets.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit{
  character!: Person;
  id!: number;
  homeworldId:string = '';
  homeworldName:string = '';

  defaultImageSrc = 'assets/icons/light-saber.png';
  constructor(private swapiService:SwapiService, private route: ActivatedRoute, private router:Router, private planetService:PlanetsService){}

  ngOnInit(): void {
    this.attachRouterId();
    this.swapiService.getDataById<Person>(this.id, 'people').subscribe((data)=>{
      this.character = data;
      this.manageHomeWorld();
    })

  }
  manageHomeWorld(){
    const urlSegments = this.character.homeworld.split('/');
    const homeId = urlSegments[urlSegments.length - 2];
    this.homeworldId = homeId;
    this.planetService.getPlanetName(this.homeworldId).subscribe(
      name => this.homeworldName = name,
      error => console.error('Error retrieving planet name:', error)
    );
  }
  attachRouterId(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

    });
  }
  getImagePath(): string {
    return `assets/characters/${this.id}.jpg`;
  }
  getEntityId(entityId: string): string {
    const id = this.extractIdFromUrl(entityId);
    return `${id}`;
  }

  getFilmImageUrl(filmUrl: string, entity:string): string {
    const id = this.extractIdFromUrl(filmUrl);
    return `assets/${entity}/${id}.jpg`;
  }

  private extractIdFromUrl(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 2];
  }
  navigateToCharacters(){
    const pageNumber = this.calculatePageNumber(this.id);
    this.router.navigate(['/characters'], { queryParams: { page: pageNumber } })
  }
  calculatePageNumber(id: number): number {
    return Math.floor((id - 1) / 10) + 1;
  }
  setDefaultImage(event:any){
    event.target.src = this.defaultImageSrc;
  }
}

