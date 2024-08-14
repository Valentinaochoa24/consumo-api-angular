import { Component } from '@angular/core';
import { ConsumoApiCrearService } from '../servicios/consumo-api-crear.service';
import { CommonModule } from '@angular/common';
import { Crear } from '../modelos/crear';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-publicaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-publicaciones.component.html',
  styleUrls: ['./crear-publicaciones.component.css']
})
export class CrearPublicacionesComponent {
  crear: Crear = {
    title: '',
    body: '',
    userId: 0
  };
  successMessage: string = ''; // Mensaje de éxito

  constructor(private apiService: ConsumoApiCrearService) {}

  onSubmit() {
    this.apiService.crearPost(this.crear).subscribe(
      response => {
        console.log('Post creado:', response);
        this.successMessage = '¡Publicación creada con éxito!'; // Establecer el mensaje de éxito
        this.crear = { title: '', body: '', userId: 0 }; // Limpiar el formulario
      },
      error => {
        console.error('Error al crear el post:', error);
        this.successMessage = 'Error al crear la publicación. Inténtalo de nuevo.'; // Mensaje de error
      }
    );
  }
}