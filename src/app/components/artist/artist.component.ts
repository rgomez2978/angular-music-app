import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  albumTracks: any = {};
  artistPlaylist: any [] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private deezer: DeezerService) {
    this.loading = true;

    // obtinen el id de la ruta
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      // this.getPlaylist(params['id']);
      this.getPlaylist();
      // console.log(params);
    });

  }

  // Obtener la info del API de aertista con el ID desde la ruta
  getArtist(id: string) {
    this.loading = true;
    this.deezer.getArtistId(id)
      .subscribe(resp => {
        console.log(resp);
        this.artist = resp;
        this.loading = false;
    });
  }


  // Obtener un playlist de un artista
  getPlaylist() {
    // this.deezer.getArtistPlayList(id)
    this.deezer.getArtistTrack()
      .subscribe(resp => {
        console.log(resp);
        this.artistPlaylist = resp;
    });
  }

}
