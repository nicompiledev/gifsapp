import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  @ViewChild('txtSearch') txtSearch!:ElementRef;
  search(term:string){
    console.log(term)
    const valor = this.txtSearch.nativeElement.value
    console.log(valor)
  }
}
