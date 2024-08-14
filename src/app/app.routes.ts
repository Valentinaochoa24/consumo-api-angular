import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { AdminpublicacionesComponent } from './adminpublicaciones/adminpublicaciones.component';
import { EditarpublicacionesComponent } from './editarpublicaciones/editarpublicaciones.component';
import { CrearPublicacionesComponent } from './crear-publicaciones/crear-publicaciones.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

export const routes: Routes = [
    {
      path: 'administrar',
      component: AdminpublicacionesComponent,
      children: [
        { path: '', redirectTo: 'editar', pathMatch: 'full' },
        { path: 'editar', component: EditarpublicacionesComponent },
        { path: 'crear', component: CrearPublicacionesComponent }
      ]
    },
    // Otras rutas de la aplicación
    { path: 'inicio', component: ListaTareasComponent },
    { path: 'about', component: PublicacionesComponent },
    { path: '**', redirectTo: 'inicio' } // Ruta por defecto si no se encuentra la ruta
  ];
