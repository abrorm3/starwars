import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card/card-details/card-details.component';
import { CardComponent } from './card/card.component';
import { PeopleComponent } from './people.component';



@NgModule({
  declarations: [
    PeopleComponent,
    CardComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
