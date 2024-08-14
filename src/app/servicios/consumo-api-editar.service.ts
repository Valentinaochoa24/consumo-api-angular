import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editar } from '../modelos/editar';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiEditarService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) {}

  // Método para actualizar un post existente
  actualizarPost(id: number, editar: Editar): Observable<Editar> {
    return this.http.put<Editar>(`${this.apiUrl}/${id}`, editar, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}
