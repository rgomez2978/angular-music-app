import { Component } from '@angular/core';
import { DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

  artistSearch: any[] = [];
  loading: boolean;

  constructor(private deezer: DeezerService) { }

  // Muestra info de busqueda
  search(term: string) {
    // Carga automatica del metodo del servicio
    this.loading = true;
    this.deezer.getArtistSearch(term)
      .subscribe(resp => {
        console.log(resp);
        this.artistSearch = resp;
        this.loading = false;
    });
  }


}
