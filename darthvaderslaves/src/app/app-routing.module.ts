import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PeopleComponent } from './pages/people/people.component';
import { CardDetailsComponent } from './pages/people/card-details/card-details.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { PlanetDetailsComponent } from './pages/planets/planet-details/planet-details.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmDetailsComponent } from './pages/films/film-details/film-details.component';
import { SpeciesComponent } from './pages/species/species.component';
import { SpeciesDetailsComponent } from './pages/species/species-details/species-details.component';

const routes: Routes = [
  {path:'', redirectTo:'main',pathMatch: 'full'},
  {path:'main', component:MainComponent},
  {path:'characters', component:PeopleComponent},
  {path:'character/:id', component:CardDetailsComponent},
  {path:'planets', component:PlanetsComponent},
  {path:'planet/:id', component:PlanetDetailsComponent},
  {path:'films', component:FilmsComponent},
  {path:'film/:id', component:FilmDetailsComponent},
  {path:'species', component:SpeciesComponent},
  {path:'specie/:id', component:SpeciesDetailsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
