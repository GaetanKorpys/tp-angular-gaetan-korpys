import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ContactComponent} from "./contact/contact.component";
import { ListMusicComponent } from './list-personnel/list-music.component';
import { EditionComponent } from './list-personnel/edition/edition.component';
import { MusicDetailResolver } from './partage/musique-detail-resolver/musique-detail-resolver.resolver';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil', component: AccueilComponent},
  {path:'listMusique', component: ListMusicComponent},
  {path:'contact', component: ContactComponent},
  {path: 'edit/:id', component: EditionComponent, resolve: { employe: MusicDetailResolver } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
