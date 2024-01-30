import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {mergeMap} from "rxjs";


import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";
import { Music } from '../model/Music';
import { ListMusicService } from '../partage/services/list-music-service.service';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {


  musicList: Music[] = [];

  view:string = "card";
  dialogStatus: string = "inactive";
  private addDialog: MatDialogRef<AjoutPopupComponent> | any;

  constructor( private readonly listMusicService: ListMusicService, public dialog: MatDialog) {
    //Rien à faire ici
  }

  ngOnInit(): void {
    this.listMusicService.fetch().subscribe(musicList => {
      this.musicList = musicList || [];
    });
  }

  deleteListMusic(music: Music) {
    this.listMusicService.delete(music.id!).subscribe(musicList => {
      this.musicList = musicList;
    });
  }

  switchView() {
    if(this.view==="card"){
      this.view = "list"
    }
    else{
      this.view = "card";
    }
  }

  add(music: Music) {
    this.listMusicService
      .create(music)
      .pipe(mergeMap(() => this.listMusicService.fetch()))
      .subscribe(musicList => {
        this.musicList = musicList;
        this.hideDialog();
      });
  }

  update(music: Music) {
    this.listMusicService
      .update(music)
      .pipe(mergeMap(() => this.listMusicService.fetch()))
      .subscribe(musicList => {
        this.musicList = musicList;
        this.hideDialog();
      });
  }

  showDialog() {
    debugger;
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((person:any)=> {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }
}
