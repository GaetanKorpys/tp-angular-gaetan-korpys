import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ListMusicService } from '../partage/services/list-music-service.service';
import { Music } from '../model/Music';
import { M } from '@angular/cdk/keycodes';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  musicList: Music[] = [];

  musicAccueil: Music = {};
  
  constructor(private readonly listMusicService:ListMusicService) {
    this.random();
  }

  random() {
    this.listMusicService.fetchRandom().subscribe(music => {
      this.musicAccueil = music;
    });
  }

  deleteAccueil(music: Music){
    this.listMusicService.delete(music.id!).subscribe(() => {
      this.random();
    });
  }

  ngOnInit(): void {
  }
}
