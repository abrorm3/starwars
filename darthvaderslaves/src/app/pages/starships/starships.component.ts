import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from 'src/app/shared/interfaces/starship.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {
  starships: Starship[] = [];
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
    this.swapiService.getEntityData(this.pageIndex, 'starships').subscribe({
      next: (data: any) => {
        this.loading=false;
        this.starships = data.results.map((starship: Starship, index: number) => ({
          ...starship,
          id: index + 1,
        }));
      },
      error: (error) => {
        console.error('Error fetching starships data:', error);
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
