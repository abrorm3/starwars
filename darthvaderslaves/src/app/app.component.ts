import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'darthvaderslaves';
  opened: boolean = true;
  pageSize = 10;
  pageIndex = 0;
  totalItems = 100;

  constructor(private router:Router, private route:ActivatedRoute){}

  onPageChange(event: any): void {
    // Update the current page index
    this.pageIndex = event.pageIndex;

    // Update the URL with the new page index
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.pageIndex + 1}, // Add 1 because page index is zero-based
      queryParamsHandling: 'merge',
    });
  }

}
