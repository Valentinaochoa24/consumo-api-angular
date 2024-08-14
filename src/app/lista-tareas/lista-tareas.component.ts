import { Component } from '@angular/core';
import { ConsumoApiService } from '../servicios/consumo-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {

  listaTareas: any[] = [];

  constructor(private servicioApi: ConsumoApiService)
  {

  }

  ngOnInit(): void{
    this.getListadoTareas();
  }

  ngOnDestroy(): void {
    
  }

  getListadoTareas()
  {
    this.servicioApi.getListado().subscribe( datos => {
      this.listaTareas = datos;
    });
  }
}
