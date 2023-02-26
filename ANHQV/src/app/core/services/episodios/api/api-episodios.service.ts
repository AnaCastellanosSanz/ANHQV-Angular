import { ApiEpisodios } from './api-episodios.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Es una buena práctica que el nombre sea en mayúsculas y con _
const BASE_URL = 'https://63e148ac65b57fe60656156f.mockapi.io/ANHQV/Episodios'

@Injectable({
  providedIn: 'root'
})
export class ApiEpisodiosService {

  constructor(private http: HttpClient) { }

  //getApiEpisodios hace una petición GET a la API para obtener los episodios de la serie. Devuelve un objeto Observable que emite un array de objetos ApiEpisodios.
  
  public getApiEpisodios(): Observable<ApiEpisodios[]>  {
    return this.http.get<ApiEpisodios[]>(BASE_URL);
  }

  public getApiEpisodioDetail(id: string): Observable<ApiEpisodios> {
    return this.http.get<ApiEpisodios>(`${BASE_URL}/${id}`);
  }
}
