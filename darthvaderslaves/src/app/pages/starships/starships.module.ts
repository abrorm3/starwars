import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { StarshipsComponent } from './starships.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StarshipsComponent, StarshipDetailsComponent],
  imports: [CommonModule, MatProgressSpinnerModule, RouterModule, SharedModule],
})
export class StarshipsModule {}
