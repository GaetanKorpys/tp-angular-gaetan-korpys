import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { Music } from 'src/app/model/Music';
import { ListMusicService } from '../services/list-music-service.service';

@Injectable({
  providedIn: 'root'
})
export class MusicDetailResolver implements Resolve<Music> {

  constructor(private readonly listMusicService: ListMusicService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Music> {
    const musicId: string | null = route.paramMap.get('id');
    if(musicId != null){
      return this.listMusicService.fetchOne(musicId);
    }
    else
      return new Observable<Music>();
  }
}