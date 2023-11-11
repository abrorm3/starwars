import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Person } from 'src/app/shared/interfaces/person.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];
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
    this.swapiService.getEntityData(this.pageIndex, 'people').subscribe({
      next: (data: any) => {
        this.loading=false;
        this.people = data.results.map((person: Person, index: number) => ({
          ...person,
          id: index + 1,
        }));

        console.log(this.people);
      },
      error: (error) => {
        console.error('Error fetching people data:', error);
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
