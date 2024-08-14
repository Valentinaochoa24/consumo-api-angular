import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {ListaTareasComponent} from './lista-tareas/lista-tareas.component';
import {NavbarComponent} from './navbar/navbar.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ListaTareasComponent, 
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JACAVA';
}
