import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {SpotifyService} from "../services/SpotifyService";
import {Location} from "@angular/common";

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Object;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService,
              private location: Location) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.spotify.getAlbum(this.id).subscribe((album: any) => {
      this.renderAlbum(album);
    });
  }

  renderAlbum(res: any) {
    this.album = res;
  }

  back() {
    this.location.back();
  }

}
