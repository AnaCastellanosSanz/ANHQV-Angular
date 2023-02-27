
import { Creations } from './creations.models';
import { ApiCreationsService } from './api/api-creations.service';
import { ApiCreations } from './api/api-creations.models';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { transformCreation} from './creations.helpers';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CreationsService {

  constructor(
    private apiCreationsService: ApiCreationsService,
    private loadingService: LoadingService
  ) { }

  

  //getCreations: Obtiene una lista de personajes de la API. Luego, utiliza map() para transformar los personajes de la API en objetos Character utilizando transformCharacter(), y tap() para ocultar el indicador de carga mediante LoadingService. Devuelve un Observable de una matriz de Character.

  public getCreations(): Observable<Creations[]> {
    this.loadingService.showLoading();
    // Pipe: nos permite concatenar acciones a los datos emitidos por un observable antes de suscribirnos.
    return this.apiCreationsService.getApiCreations().pipe(
      map((creations: ApiCreations[]) => {
        return creations.map((creation) => transformCreation(creation))
      }),
      tap(() => this.loadingService.hideLoading())
     
    );
  }

  public getCreationDetail(id: string): Observable<Creations> {
    return this.apiCreationsService.getApiCreationDetail(id).pipe(
      map(creation => transformCreation(creation))
    );
  }
 
  
  //deleteCreation: elimina una creación de la API. Luego, utiliza map() para transformar el resultado en un objeto Creations. Devuelve un Observable de una sola creación.

  public deleteCreation(id: string): Observable<Creations> {
    return this.apiCreationsService.deleteApiCreations(id).pipe(
      map((creation) => transformCreation(creation))
    )
  }

  //createCreation: Crea una nueva creación en la API. Luego, utiliza map() para transformar el resultado en un objeto Creations. Devuelve un Observable de un solo creation.

  public createCreation (body: Creations): Observable<Creations> {
    return this.apiCreationsService.createApiCreations(body).pipe(
      map((creation) => transformCreation(creation))
    );
  }

  //editCreation: Actualiza una creación existente en la API. Luego, utiliza map() para transformar el resultado en un objeto Creations. Devuelve un Observable de un solo creation.

  public editCreation (id: string, body: Creations): Observable<Creations> {
    return this.apiCreationsService.editApiCreations(id, body).pipe(
      map((creation) => transformCreation(creation))
    );
  }
}
