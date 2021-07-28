import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService) {
    
    this.loading = true;
    this.activatedRoute.params.subscribe( params =>{
      
      this.getArtist( params['id'] );
      this.getTopTracks( params['id']);
      
    })

   }

  getArtist( id: string){
    this.spotify.getArtist(id)
    .subscribe( artist => {
      this.artist = artist;
      console.log(artist);
      this.loading = false;
    })
  }

  getTopTracks( id: string){
    this.spotify.getTopTracks( id )
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }
}
