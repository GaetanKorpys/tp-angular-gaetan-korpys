import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {


  @ViewChild("nom") nom: ElementRef<HTMLElement> | undefined;
  @ViewChild("prenom") prenom: ElementRef<HTMLElement> | undefined;
  @ViewChild("email") email: ElementRef<HTMLElement> | undefined;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.nom!.nativeElement!.innerHTML = "Korpys";
    this.prenom!.nativeElement!.innerHTML = "Gaëtan";
    this.email!.nativeElement!.innerHTML = "gaetan.korpys9@etu.univ-lorraine.fr";
    }

}