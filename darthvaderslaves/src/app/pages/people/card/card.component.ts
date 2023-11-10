import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() entity: any;
  @Input() entityType: string ='';
  @Input() currPage:number=1;

  constructor(private router:Router, private route:ActivatedRoute, private peopleService:PeopleService){}

  ngOnInit(): void {

  }

  getImagePath(): string {
    const adjustedEntityId = this.entity.id + (this.currPage - 1) * 10;
      console.log(`assets/${this.entityType}/${adjustedEntityId}.jpg`);
      return `assets/${this.entityType}/${adjustedEntityId}.jpg`;
  }
  navigateDetails(){
    this.router.navigate([`/character/${this.entity.id}`]);
  }
}
