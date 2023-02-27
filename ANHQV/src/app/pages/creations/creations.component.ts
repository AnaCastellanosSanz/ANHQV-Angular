import { CreationsService } from '../../core/services/creations/creations.service';
import { Creations } from '../../core/services/creations/creations.models';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {

  public creations: Creations[] = [];

  constructor(
    private creationsService: CreationsService,
    private router: Router) {}

  public ngOnInit(): void {
      //CreationsService recupera una lista de creaciones y se almacena en la propiedad creations$. La propiedad creations$ es un observable que contiene una lista de creaciones.
      this.creationsService.getCreations().subscribe((creationsFromApi) => {
        this.creations = creationsFromApi;
      });
  }

   //El método navigateToCreateCreations() navega a la página create-creations para crear una nueva creación.
   public navigateToCreateCreations() {
    this.router.navigate(['create-creations']);
  }


   //removeCreation() elimina una creación de la lista y actualiza la lista después de la eliminación, utilizando el método deleteCreation() del servicio CreationsService y el operador switchMap() de RxJS.

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