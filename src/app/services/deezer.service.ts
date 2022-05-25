import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DeezerService {
  constructor(private http: HttpClient) {
    // console.log('Deezer service listo');
  }

  // Consumir API - GET
  getAPI(query: string) {
    // URL o endpoint
    const url = `https://deezerdevs-deezer.p.rapidapi.com/${query}`;

    // Cabeceras del token del api - Seguridad
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'bf6f6dbb25mshc31f95af5bdc607p11dc9fjsn5b267d7fff12',
    });

    return this.http.get(url, { headers });
  }

  // Obtiene los nombres de los discos de un artista
  getArtistAlbumns() {
    return this.getAPI('search?q=metallica').pipe(
      map((resp: any) => resp.data)
    );
  }

  // Obtiene el artista
  getArtistSearch(term: string) {
    return this.getAPI(`search?q=${term}`).pipe(map((resp: any) => resp.data));
  }

  // Obtiene el artista
  getArtistId(id: string) {
    return this.getAPI(`artist/${id}`).pipe(map((resp: any) => resp));
  }

  // Obtiene el playlist un artista
  getArtistPlayList(id: string) {
    return this.getAPI(`playlist/${id}`).pipe(map((resp: any) => resp));
  }

  // Obtiene el playlist un artista
  getArtistTrackList(id: string) {
    return this.getAPI(`album/${id}`).pipe(map((resp: any) => resp));
  }

  // Obtiene el dato de una cancion de un artista
  // getArtistTrack() {
    // return this.getAPI(`album/1068075307`).pipe( map((resp: any) => resp.tracks.data) );
  // }

  // Obtiene los comentarios hacia un artista de un artista
  getArtistComments(id: string) {
    return this.getAPI(`artist/${id}/comments`).pipe(
      map((resp: any) => resp.data)
    );
  }
}
