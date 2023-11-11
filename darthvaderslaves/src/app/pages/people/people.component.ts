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

  pageSize = 10; // number of items per page
  pageIndex = 0; // current page index
  totalItems = 100; // total number of items

  constructor(private swapiService: SwapiService, private route:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.getPageInfo();
    this.fetchEntity();
  }
  getPageInfo(){
    this.route.params.subscribe((params: Params) => {
      this.currentPage = +params['page'] || 1;
      console.log('Current Page:', this.currentPage);
    });
  }
  fetchEntity(){
    this.swapiService.getPeople(this.currentPage).subscribe({
      next: (data: any) => {
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
  onPageChange(): void {
    this.router.navigate([`/characters/${this.currentPage}`])
    // this.route.params.subscribe((params: Params) => {
    //   this.currentPage = +params['page'] || 1;
    // });
    // // Update the URL with the new page index
    // this.router.navigate(['/characters'], {
    //   queryParams: { page: this.pageIndex + 1 }, // Add 1 because page index is zero-based
    //   queryParamsHandling: 'merge',
    // });
  }



}
