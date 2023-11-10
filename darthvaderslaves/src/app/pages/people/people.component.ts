import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private swapiService: SwapiService, private route:ActivatedRoute) {}

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

}
