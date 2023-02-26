import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  // Obtiene una referencia al elemento HTML con el identificador 'txtSearch' utilizando la directiva ViewChild
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  // Inyecta el servicio GifsService
  constructor( private gifsService: GifsService) { }

  // Función que se llama cuando se realiza una búsqueda
  search() {
    // Obtiene el valor actual del input utilizando la referencia a través de nativeElement
    const valor = this.txtSearch.nativeElement.value;

    // Verifica si el valor no está vacío
    if (valor.trim() !== '') { // Verifica si el valor no está vacío
      // Llama al método searchGifs del servicio GifsService
      this.gifsService.buscarGifs(valor);

      // Limpia el valor del input
      this.txtSearch.nativeElement.value = '';
    }

  }
}
