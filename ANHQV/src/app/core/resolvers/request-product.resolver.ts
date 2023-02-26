
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { CharactersService } from './../services/characters/characters.service';
import { Character } from './../services/characters/character.models';


@Injectable({
  providedIn: 'root'
})
export class RequestCharacterResolver implements Resolve<Character | null> {

  constructor(private charactersService: CharactersService) {}

  //La función resolve, recibe dos argumentos: la ruta activada y el estado del enrutador. Si se detecta una solicitud sin identificador, se devuelve un valor nulo. De lo contrario, se usa el identificador para obtener los detalles del personaje desde el servicio de personajes.

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character | null> {
    console.log(route, state);
    const id = route.params['id'];
    if (!id) { return of(null); }
    return this.charactersService.getCharacterDetail(id);
  }
}
