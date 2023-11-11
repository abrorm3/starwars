import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SpeciesComponent } from './pages/species/species.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './pages/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PeopleModule } from './pages/people/people.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PlanetsModule } from './pages/planets/planets.module';
import { SharedModule } from './shared/shared.module';
import { FilmsModule } from './pages/films/films.module';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
    SidebarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    PeopleModule,
    MatSidenavModule,
    MatIconModule,
    MatPaginatorModule,
    PlanetsModule,
    SharedModule,
    FilmsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
