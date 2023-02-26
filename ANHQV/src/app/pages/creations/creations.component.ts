import { CreationsService } from '../../core/services/creations/creations.service';
import { Creations } from '../../core/services/creations/creations.models';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {

  public creations: Creations[] = [];

  constructor(private creationsService: CreationsService) {}

  public ngOnInit(): void {
      this.creationsService.getCreations().subscribe((creationsFromApi) => {
        this.creations = creationsFromApi;
      });
  }

  public removeCreation(id?: string) {
    if (!id) { return; }
    this.creationsService.deleteCreation(id).pipe(
      // Concatenar una petición a otra. Cuando termine una emisión se lanza la siguiente
      // y el receptor lo emitido por la última emisión
      switchMap((product) => {
        return this.creationsService.getCreations();
      })
    ).subscribe((creationsFromApi) => {
      this.creations = creationsFromApi;
    });
  }

}