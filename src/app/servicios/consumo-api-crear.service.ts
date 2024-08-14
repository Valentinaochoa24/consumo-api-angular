import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crear } from '../modelos/crear';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiCrearService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) 
  {

  }
  
  crearPost(crear: Crear): Observable<Crear> {
    return this.http.post<Crear>(this.apiUrl, crear, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}
