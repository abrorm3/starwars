import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from 'src/app/shared/interfaces/starship.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent {
  starship!: Starship;
  id!: number;

  defaultImageSrc = 'assets/icons/light-saber.png';
  constructor(private swapiService:SwapiService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.attachRouterId();
    this.swapiService.getDataById<Starship>(this.id, 'starships').subscribe((data)=>{
      this.starship = data;
    })

  }
  attachRouterId(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  getImagePath(): string {
    return `assets/starships/${this.id}.jpg`;
  }
  getEntityId(entityId: string): string {
    const id = this.extractIdFromUrl(entityId);
    return `${id}`;
  }

  getImageUrl(entityUrl: string, entity:string): string {
    const id = this.extractIdFromUrl(entityUrl);
    return `assets/${entity}/${id}.jpg`;
  }

  private extractIdFromUrl(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 2];
  }
  navigateToStarships(){
    const pageNumber = this.calculatePageNumber(this.id);
    this.router.navigate(['/starships'], { queryParams: { page: pageNumber } })
  }
  calculatePageNumber(id: number): number {
    return Math.floor((id - 1) / 10) + 1;
  }
  setDefaultImage(event:any){
    event.target.src = this.defaultImageSrc;
  }
}
