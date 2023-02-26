import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Creations } from '../creations.models';
import { ApiCreations } from './api-creations.models';


//Es una buena práctica que vaya con mayúsculas
const API_CREATION_URL = 'https://63f7fff8cbdb951097599a86.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class ApiCreationsService {

  constructor(
    private http: HttpClient
  ) { }

  //getApiCreations: realiza una petición HTTP GET a la API para obtener todos las creaciones. Devuelve un Observable que emite un array de objetos ApiCreations.
  //El valor que devuelve un observable que va a ir haciendo next de los valores nuevos que vaya recuperando la api.

  public getApiCreations(): Observable<ApiCreations[]> {
    return this.http.get<ApiCreations[]>(`${API_CREATION_URL}/creations`);
  }


  //deleteApiCreations: realiza una petición HTTP DELETE a la API para eliminar una creación en concreto. Recibe como parámetro el id de la creación que se quiere eliminar y devuelve un Observable que emite un objeto ApiCreations.

  public deleteApiCreations(id: string): Observable<ApiCreations> {
    return this.http.delete<ApiCreations>(`${API_CREATION_URL}/creations/${id}`);
  }


  public getApiCreationDetail(id: string): Observable<ApiCreations> {
    return this.http.get<ApiCreations>(`${API_CREATION_URL}/creations/${id}`);
  }


  //createApiCreations: realiza una petición HTTP POST a la API para crear una nueva creación. Recibe como parámetro un objeto Creations que representa la nueva creación que se quiere crear y devuelve un Observable que emite un objeto ApiCreations.

  public createApiCreations(body: Creations): Observable<ApiCreations> {
    return this.http.post<ApiCreations>(`${API_CREATION_URL}/creations`, body);
  }

  //editApiCreations: realiza una petición HTTP PUT a la API para editar los datos de una creación en concreto. Recibe como parámetros el id de la creación que se quiere editar y un objeto Creations que representa las nuevas creaciones. Devuelve un Observable que emite un objeto ApiCreations.

  public editApiCreations(id: string, body: Creations): Observable<ApiCreations> {
    return this.http.put<ApiCreations>(`${API_CREATION_URL}/creations/${id}`, body);
  }


}
