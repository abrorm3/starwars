import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];


  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.swapiService.getPeople().subscribe({
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
