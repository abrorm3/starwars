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
  adjustedEntityId!: number;

  constructor(private router:Router, private route:ActivatedRoute, private peopleService:PeopleService){}

  ngOnInit(): void {
    this.adjustedEntityId = this.entity.id + (this.currPage - 1) * 10;
  }

  getImagePath(): string {

      console.log(`assets/${this.entityType}/${this.adjustedEntityId}.jpg`);
      return `assets/${this.entityType}/${this.adjustedEntityId}.jpg`;
  }
  navigateDetails(){
    this.router.navigate([`/character/${this.adjustedEntityId}`]);
  }
}
