import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person.model';
import { PeopleService } from '../../people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit{
  character!: Person;
  id!: number;

  defaultImageSrc = 'assets/icons/light-saber.png';
  constructor(private peopleService:PeopleService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.attachRouterId();
    this.peopleService.getDataById(this.id).subscribe((data)=>{
      this.character = data;
      console.log(this.character);

    })

  }
  attachRouterId(){
    // this.peopleService.getCurrentPage()
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

      // this.peopleService.getCharacterId(id);
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
    // return this.calculatePageNumber(this.id);
    this.router.navigate([`/characters/${this.calculatePageNumber(this.id)}`])
  }
  calculatePageNumber(id: number): number {
    const entitiesPerPage = 10;
    const pageNumber = Math.ceil(id / entitiesPerPage);
    return Math.max(1, pageNumber);
  }
  setDefaultImage(event:any){
    event.target.src = this.defaultImageSrc;
  }
}

