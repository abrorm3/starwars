import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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

  routeMain:boolean = false;

  constructor(private router:Router, private route:ActivatedRoute){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.root;
        if (currentRoute.firstChild?.routeConfig?.path === 'main') {
          this.routeMain = true;
          console.log(this.routeMain);
        }else{
          this.routeMain=false;
        }
      }
    });
  }

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
