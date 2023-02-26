import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // Obtiene el historial de búsquedas del servicio GifsService
  get historial() {
    return this.gifsService.historial;
  }

  // Inyecta el servicio GifsService
  constructor( private gifsService: GifsService) { }

  // Función que se llama cuando se hace clic en un elemento del historial
  search( item: string ) {
    // Llama al método searchGifs del servicio GifsService
    this.gifsService.buscarGifs(item);
  }
}
