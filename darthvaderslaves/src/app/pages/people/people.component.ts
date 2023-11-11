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
  currentPage: number=1;

  pageSize = 10;
  pageIndex = 1;
  totalItems = 100;
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
    this.swapiService.getPeople(this.pageIndex).subscribe({
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
    // Update the current page index
    this.pageIndex = event.pageIndex;

    // Update the URL with the new page index
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.pageIndex}, // Add 1 because page index is zero-based
      queryParamsHandling: 'merge',
    });
  }



}
