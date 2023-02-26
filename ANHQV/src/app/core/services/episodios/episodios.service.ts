import { ApiEpisodiosService } from './api/api-episodios.service';
import { ApiEpisodios } from './api/api-episodios.models';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Episodios } from './episodios.models';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  constructor(private apiEpisodiosService: ApiEpisodiosService) { }

  //getEpisodios() devuelve un Observable que emite una lista de instancias de la clase Episodios. Dentro de esta función, se llama a getApiEpisodios() de ApiEpisodiosService para obtener una lista de instancias de ApiEpisodios.  Se utiliza map para transformar cada instancia de ApiEpisodios en una instancia de Episodios. Finalmente, la función devuelve la lista resultante.
  
  //La transformación de ApiEpisodios a Episodios se realiza en el cuerpo de la función map. Para cada instancia de ApiEpisodios, se crea un objeto Episodios con los mismos valores para las propiedades id, title, description y video. Estos valores se toman de la instancia de ApiEpisodios que se está transformando.

  public getEpisodios(): Observable<Episodios[]> {
    return this.apiEpisodiosService.getApiEpisodios().pipe(
      map((apiEpisodios: ApiEpisodios[]) => {
        return apiEpisodios.map((apiEpisodio) => ({
          id: apiEpisodio.id,
          title: apiEpisodio.title,
          description: apiEpisodio.description,
          video: apiEpisodio.video
        }));
      })
    );
  }
}
