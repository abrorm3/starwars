import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PeopleComponent } from './pages/people/people.component';
import { CardDetailsComponent } from './pages/people/card-details/card-details.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { PlanetDetailsComponent } from './pages/planets/planet-details/planet-details.component';

const routes: Routes = [
  {path:'', redirectTo:'main',pathMatch: 'full'},
  {path:'main', component:MainComponent},
  {path:'characters', component:PeopleComponent},
  {path:'character/:id', component:CardDetailsComponent},
  {path:'planets', component:PlanetsComponent},
  {path:'planet/:id', component:PlanetDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
