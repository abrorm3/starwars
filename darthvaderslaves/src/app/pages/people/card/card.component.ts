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
  pageIndex:number = 1;
  charId:number =0;
  constructor(private router:Router, private route:ActivatedRoute, private peopleService:PeopleService){}

  ngOnInit(): void {


    this.route.queryParams.subscribe(params => {
      this.pageIndex = params['page'] ? +params['page']: 1;
      console.log(this.pageIndex + ' Ppp CARD');
      this.calcIdPage();
    });
  }
  calcIdPage(){
    this.charId = this.entity.id + (this.pageIndex - 1) * 10;
    console.log(this.charId);

  }

  getImagePath(): string {
      return `assets/${this.entityType}/${this.charId}.jpg`;
  }
  navigateDetails(){
    this.router.navigate([`/character/${this.charId}`]);
  }
}
