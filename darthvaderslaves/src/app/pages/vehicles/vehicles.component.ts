import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/shared/interfaces/vehicle.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  vehicles: Vehicle[] = [];
  pageIndex = 1;
  loading: boolean = false;

  constructor(private swapiService: SwapiService, private route:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pageIndex = params['page'] ? +params['page']: 1;
      this.fetchEntity();
    });
  }
  fetchEntity(){
    this.loading =true;
    this.swapiService.getEntityData(this.pageIndex, 'vehicles').subscribe({
      next: (data: any) => {
        this.loading=false;
        this.vehicles = data.results.map((vehicle: Vehicle, index: number) => ({
          ...vehicle,
          id: index + 1,
        }));
      },
      error: (error) => {
        console.error('Error fetching vehicles data:', error);
      },
    });
  }
  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.pageIndex},
      queryParamsHandling: 'merge',
    });
  }
}
