import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/shared/interfaces/films.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  films: Film[] = [];
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
    this.swapiService.getFilms(this.pageIndex).subscribe({
      next: (data: any) => {
        this.loading=false;
        this.films = data.results.map((film: Film, index: number) => ({
          ...film,
          id: index + 1,
        }));

        console.log(this.films);
      },
      error: (error) => {
        console.error('Error fetching films data:', error);
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
