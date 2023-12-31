import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from 'src/app/shared/interfaces/planet.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {
  planets: Planet[] = [];
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
    this.swapiService.getEntityData(this.pageIndex, 'planets').subscribe({
      next: (data: any) => {
        this.loading=false;
        this.planets = data.results.map((person:  Planet, index: number) => ({
          ...person,
          id: index + 1,
        }));

      },
      error: (error) => {
        console.error('Error fetching planet data:', error);
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
