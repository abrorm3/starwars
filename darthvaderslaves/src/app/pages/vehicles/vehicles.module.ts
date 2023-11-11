import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [VehiclesComponent, VehicleDetailsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    SharedModule
  ]
})
export class VehiclesModule { }
