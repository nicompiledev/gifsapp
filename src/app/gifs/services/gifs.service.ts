import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private apiKey: string = 'wI6mxBQxdhYKpG9NZTQAwOHPIRHBUDXG'


  private _historial: string[] = [];


  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {}

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


    // Realizo la petición HTTP usando fetch api
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`).then( resp => {
    //   resp.json().then( data => {
    //     console.log(data);
    //   })
    // })

    // Realizo la petición HTTP usando HttpClient
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=wI6mxBQxdhYKpG9NZTQAwOHPIRHBUDXG&q=gears of war&limit=10')
    .subscribe((resp:any) => {
      console.log(resp.data);
    })


    // Guardo el historial en el localStorage
    localStorage.setItem('historial', JSON.stringify(this._historial));

  }

}
