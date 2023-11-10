import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card/card-details/card-details.component';
import { CardComponent } from './card/card.component';
import { PeopleComponent } from './people.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    PeopleComponent,
    CardComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ]
})
export class PeopleModule { }
