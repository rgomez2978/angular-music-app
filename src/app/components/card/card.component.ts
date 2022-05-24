import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent  {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  // Obtine el id del artista
  getArtistId(item: any) {
    let artistId;
    let albumId;
    artistId = item.artist.id;
    albumId = item.album.id;
    console.log(artistId, albumId);
    this.router.navigate(['/artist', artistId]);
    // this.router.navigate(['/artist?id=23321&album=112232', artistId]);
  }


}
