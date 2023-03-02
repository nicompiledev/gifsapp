import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  // Obtiene el historial de búsquedas del servicio GifsService
  get results() {
    return this.gifsService.results;
  }

  // Inyecta el servicio GifsService en el constructor
  constructor(private gifsService: GifsService){ }
}
