import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../services/SpotifyService";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'theTrack',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService,
              private location: Location) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.spotify.getTrack(this.id)
      .subscribe((track: any) => {
        this.track = track;
      });
  }

  back() {
    this.location.back();
  }

}
