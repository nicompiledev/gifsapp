import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private apiKey: string = 'wI6mxBQxdhYKpG9NZTQAwOHPIRHBUDXG'


  private _historial: string[] = [];


  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string ) {

    // Convierto a minúsculas el query
    query = query.toLowerCase();

    // Agrego el query al historial si no existe ya, y limito el historial a 10 elementos
    if( !this._historial.includes(query) ) {
      this._historial.unshift(query);
      this._historial.splice(10);
    }

    // Limito el historial a 10
    // if (this._historial.length > 10) {
      // this._historial.splice(10);

    // }

    // Guardo el historial en el localStorage
    localStorage.setItem('historial', JSON.stringify(this._historial));

  }

}
