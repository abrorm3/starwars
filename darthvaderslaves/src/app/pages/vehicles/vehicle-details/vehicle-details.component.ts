import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/shared/interfaces/vehicle.model';
import { SwapiService } from 'src/app/shared/swapi.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent {
  vehicles!: Vehicle;
  id!: number;

  defaultImageSrc = 'assets/icons/light-saber.png';
  constructor(private swapiService:SwapiService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.attachRouterId();
    this.swapiService.getDataById<Vehicle>(this.id, 'planets').subscribe((data)=>{
      this.vehicles = data;
    })

  }
  attachRouterId(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  getImagePath(): string {
    return `assets/vehicles/${this.id}.jpg`;
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
  navigateToVehicles(){
    const pageNumber = this.calculatePageNumber(this.id);
    this.router.navigate(['/vehicles'], { queryParams: { page: pageNumber } })
  }
  calculatePageNumber(id: number): number {
    return Math.floor((id - 1) / 10) + 1;
  }
  setDefaultImage(event:any){
    event.target.src = this.defaultImageSrc;
  }
}
