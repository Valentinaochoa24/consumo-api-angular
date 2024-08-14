import { Component } from '@angular/core';
import { ConsumoApiUsersService } from '../servicios/consumo-api-users.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {

  listaUsers: any[] = [];

  constructor(private servicioApi: ConsumoApiUsersService)
  {

  }

  ngOnInit(): void{
    this.getListadoUsers();
  }

  ngOnDestroy(): void {
    
  }

  getListadoUsers()
  {
    this.servicioApi.getListado().subscribe( datos => {
      this.listaUsers = datos;
    });
  }

}
