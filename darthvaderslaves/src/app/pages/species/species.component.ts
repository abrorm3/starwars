import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Species } from 'src/app/shared/interfaces/species.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {
  species: Species[] = [];
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
    this.swapiService.getEntityData(this.pageIndex, 'species').subscribe({
      next: (data: any) => {
        this.loading=false;
        this.species = data.results.map((person: Species, index: number) => ({
          ...person,
          id: index + 1,
        }));

        console.log(this.species);
      },
      error: (error) => {
        console.error('Error fetching species data:', error);
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
