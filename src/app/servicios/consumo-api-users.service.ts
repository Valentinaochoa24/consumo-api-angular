import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../modelos/users';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiUsersService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) 
  {

  }

  getListado() : Observable<Users[]>{

    return this.http.get<Users[]>(this.apiUrl);
  
  }
}
