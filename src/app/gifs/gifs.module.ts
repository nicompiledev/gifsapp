import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { IntroComponent } from './intro/intro.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    IntroComponent,
    ResultsComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent,
    SearchComponent,
    IntroComponent,
    ResultsComponent,
  ]
})
export class GifsModule { }
