import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlanetsComponent } from './planets.component';
import { RouterModule } from '@angular/router';
import { PeopleModule } from '../people/people.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

@NgModule({
  declarations: [PlanetsComponent, PlanetDetailsComponent],
  imports: [CommonModule, SharedModule, MatProgressSpinnerModule, RouterModule],
})
export class PlanetsModule {}
