import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { SpeciesComponent } from './species.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SpeciesComponent,
    SpeciesDetailsComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    SharedModule
  ]
})
export class SpeciesModule { }
