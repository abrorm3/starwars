import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() entity: any;
  @Input() entityType: string ='';
film: any;

  constructor(private router:Router){}

  getImagePath(): string {
      console.log(`assets/${this.entityType}/${this.entity.id}.jpg`);
      return `assets/${this.entityType}/${this.entity.id}.jpg`;
  }
  navigateDetails(){
    this.router.navigate([`/character/${this.entity.id}`]);
  }
}
