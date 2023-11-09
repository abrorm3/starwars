import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PeopleComponent } from './pages/people/people.component';

const routes: Routes = [
  {path:'', redirectTo:'main',pathMatch: 'full'},
  {path:'main', component:MainComponent},
  {path:'people', component:PeopleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
