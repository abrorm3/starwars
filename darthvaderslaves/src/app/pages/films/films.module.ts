import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilmsComponent } from './films.component';



@NgModule({
  declarations: [
    FilmsComponent,
    FilmDetailsComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    SharedModule
  ]
})
export class FilmsModule { }
