import { Component } from '@angular/core';
import { ConsumoApiEditarService } from '../servicios/consumo-api-editar.service';
import { CommonModule } from '@angular/common';
import { Editar } from '../modelos/editar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editarpublicaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editarpublicaciones.component.html',
  styleUrl: './editarpublicaciones.component.css'
})
export class EditarpublicacionesComponent {
  editar: Editar = {
    id: 1, // ID del post que se va a editar
    title: '',
    body: '',
    userId: 1
  };
  successMessage: string = ''; // Mensaje de éxito

  constructor(private apiService: ConsumoApiEditarService) {}

  onSubmit() {
    this.apiService.actualizarPost(this.editar.id, this.editar).subscribe(
      response => {
        console.log('Post editado:', response);
        this.successMessage = '¡Publicación editada con éxito!'; 
      },
      error => {
        console.error('Error al editar el post:', error);
        this.successMessage = 'Error al editar la publicación. Inténtalo de nuevo.'; // Mensaje de error
      }
    );
  }
}
