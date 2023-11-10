import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person.model';
import { PeopleService } from '../../people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit{
  character!: Person;
  id!: number;
  constructor(private peopleService:PeopleService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.attachRouterId();
    this.peopleService.getDataById(this.id).subscribe((data)=>{
      this.character = data;
      console.log(this.character);

    })

  }
  attachRouterId(){
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
}

