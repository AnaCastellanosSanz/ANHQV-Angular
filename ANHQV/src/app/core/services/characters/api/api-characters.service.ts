import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './../character.models';
import { ApiCharacter } from './api-character.models';


//Es una buena práctica que vaya con mayúsculas
const API_CHARACTER_URL = 'https://63e148ac65b57fe60656156f.mockapi.io/ANHQV/';

@Injectable({
  providedIn: 'root'
})
export class ApiCharactersService {

  constructor(
    private http: HttpClient
  ) { }

  //getApiCharacters: realiza una petición HTTP GET a la API para obtener todos los personajes de la serie. Devuelve un Observable que emite un array de objetos ApiCharacter.
  //El valor que devuelve un observable que va a ir haciendo next de los valores nuevos que vaya recuperando la api.

  public getApiCharacters(): Observable<ApiCharacter[]> {
    return this.http.get<ApiCharacter[]>(`${API_CHARACTER_URL}/AQNHQV`);
  }

  //getApiCharacterDetail: realiza una petición HTTP GET a la API para obtener los detalles de un personaje concreto. Recibe como parámetro el id del personaje que se quiere obtener y devuelve un Observable que emite un objeto ApiCharacter.

  public getApiCharacterDetail(id: string): Observable<ApiCharacter> {
    return this.http.get<ApiCharacter>(`${API_CHARACTER_URL}/AQNHQV/${id}`);
  }

  //deleteApiCharacter: realiza una petición HTTP DELETE a la API para eliminar un personaje concreto. Recibe como parámetro el id del personaje que se quiere eliminar y devuelve un Observable que emite un objeto ApiCharacter.

  public deleteApiCharacter(id: string): Observable<ApiCharacter> {
    return this.http.delete<ApiCharacter>(`${API_CHARACTER_URL}/AQNHQV/${id}`);
  }

  //createApiCharacter: realiza una petición HTTP POST a la API para crear un nuevo personaje. Recibe como parámetro un objeto Character que representa el nuevo personaje que se quiere crear y devuelve un Observable que emite un objeto ApiCharacter.

  public createApiCharacter(body: Character): Observable<ApiCharacter> {
    return this.http.post<ApiCharacter>(`${API_CHARACTER_URL}/AQNHQV`, body);
  }

  //editApiCharacter: realiza una petición HTTP PUT a la API para editar los datos de un personaje concreto. Recibe como parámetros el id del personaje que se quiere editar y un objeto Character que representa los nuevos datos del personaje. Devuelve un Observable que emite un objeto ApiCharacter.

  public editApiCharacter(id: string, body: Character): Observable<ApiCharacter> {
    return this.http.put<ApiCharacter>(`${API_CHARACTER_URL}/AQNHQV/${id}`, body);
  }


}
