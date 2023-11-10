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
}

