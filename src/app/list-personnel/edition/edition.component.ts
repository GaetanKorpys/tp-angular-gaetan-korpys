import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Music } from 'src/app/model/Music';
import { ListMusicService } from 'src/app/partage/services/list-music-service.service';


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  music: Music;

  /**
   * Component constructor
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly listMusicService: ListMusicService
  ) {
    this.music = {};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.route.data.subscribe(( music: any) => (this.music = music.music));
  }

  submit(music: any) {
    this.listMusicService.update(music).subscribe(() => {
      this.router.navigate(['/listMusique']).then(r => null);
    });
  }

  cancel() {
    this.router.navigate(['/listMusique']).then(r => null);
  }

}