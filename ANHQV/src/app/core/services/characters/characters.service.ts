
import { Character } from './character.models';
import { ApiCharactersService } from './api/api-characters.service';
import { ApiCharacter } from './api/api-character.models';
import { EpisodiosService } from './../episodios/episodios.service';
import { Injectable } from '@angular/core';
import { catchError, filter, forkJoin, map, Observable, tap } from 'rxjs';
import { transformCharacter} from './characters.helpers';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private apiCharactersService: ApiCharactersService,
    private episodiosService: EpisodiosService,
    private loadingService: LoadingService
  ) { }

  

  //getCharacters: Obtiene una lista de personajes de la API. Luego, utiliza map() para transformar los personajes de la API en objetos Character utilizando transformCharacter(), y tap() para ocultar el indicador de carga mediante LoadingService. Devuelve un Observable de una matriz de Character.

  public getCharacters(): Observable<Character[]> {
    this.loadingService.showLoading();
    // Pipe: nos permite concatenar acciones a los datos emitidos por un observable antes de suscribirnos.
    return this.apiCharactersService.getApiCharacters().pipe(
      map((characters: ApiCharacter[]) => {
        return characters.map((character) => transformCharacter(character))
      }),
      tap(() => this.loadingService.hideLoading())
     
    );
  }

  //getCharacterDetail: Obtiene detalles de un personaje y una lista de episodios. Luego, utiliza forkJoin() para combinar los resultados de ambas llamadas y map() para transformar los resultados en un objeto Character. Devuelve un Observable de un solo Character.

  public getCharacterDetail(id: string): Observable<Character> {
    return forkJoin([
      this.apiCharactersService.getApiCharacterDetail(id),
      this.episodiosService.getEpisodios().pipe(
        catchError((err) => {
          return [];
        })
      )
    ]).pipe(
      map(([apiCharacter, episodios]) => {
        const selectedEpisodio = episodios.find((episodio) => episodio.title === apiCharacter.episodios);
        return transformCharacter(apiCharacter, selectedEpisodio);
      })
    );
  }
  
  //deleteCharacter: elimina un personaje de la API. Luego, utiliza map() para transformar el resultado en un objeto Character. Devuelve un Observable de un solo Character.

  public deleteCharacter(id: string): Observable<Character> {
    return this.apiCharactersService.deleteApiCharacter(id).pipe(
      map((character) => transformCharacter(character))
    )
  }

  //createCharacter: Crea un nuevo personaje en la API. Luego, utiliza map() para transformar el resultado en un objeto Character. Devuelve un Observable de un solo Character.

  public createCharacter(body: Character): Observable<Character> {
    return this.apiCharactersService.createApiCharacter(body).pipe(
      map((character) => transformCharacter(character))
    );
  }

  //editCharacter: Actualiza un personaje existente en la API. Luego, utiliza map() para transformar el resultado en un objeto Character. Devuelve un Observable de un solo Character.

  public editCharacter(id: string, body: Character): Observable<Character> {
    return this.apiCharactersService.editApiCharacter(id, body).pipe(
      map((character) => transformCharacter(character))
    );
  }
}
