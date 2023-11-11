import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlanetsComponent } from './planets.component';
import { RouterModule } from '@angular/router';
import { PeopleModule } from '../people/people.module';

@NgModule({
  declarations: [PlanetsComponent],
  imports: [CommonModule, PeopleModule, MatProgressSpinnerModule, RouterModule],
})
export class PlanetsModule {}
