import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

export interface Music{
  id?: string;
  title?: string;
  description?: string;
  album?: string;
  artist?: string;
  duration?: string;
  date?: string;
  style?: string[];
  picture?: string | ArrayBuffer | null;
}


@Injectable({
  providedIn: 'root'
})
export class ListMusicService {

  private employees = new BehaviorSubject<string>('');

  private urlServer:any = {};

  constructor(private readonly http: HttpClient) {

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls

    Object.keys(environment.backend.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
    console.log(this.urlServer);

  }

  get employees$(): Observable<string> {
    return this.employees.asObservable();
  }

  updatedEmployeeList(data: string){
    this.employees.next(data);
  }

  fetch(): Observable<Music[]> {
    return this.http.get<Music[]>(this.urlServer.toutesLesMusics);
  }

  search(title: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.urlServer.filterByTitle.replace(':title', title));
  }

  fetchRandom(): Observable<Music> {
    return this.http.get<Music>(this.urlServer.musicAleatoire);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.urlServer.uneMusic.replace(':id', id));
  }

  create(music: Music): Observable<Music> {
    return this.http.post<Music>(this.urlServer.toutesLesMusics, music);
  }

  fetchOne(id: string): Observable<Music> {
    return this.http.get<Music>(this.urlServer.uneMusic.replace(':id', id));
  }

  update(music: Music): Observable<Music> {
    return this.http.put<Music>(this.urlServer.uneMusic.replace(':id', music.id), music);
  }
}