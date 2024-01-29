import {Component, OnInit} from '@angular/core';
import { Person } from '../model/Person';
import {HttpClient} from "@angular/common/http";
import { ListPersonnelService } from '../partage/services/list-personnel-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  //employeAccueil!: Person;

  employeAccueil: Person = {};
  
  constructor(private readonly listPersonnelService:ListPersonnelService) {
    this.random();
  }

  random() {
    this.listPersonnelService.fetchRandom().subscribe(employe => {
      this.employeAccueil = employe;
    });
  }

  deleteAccueil(person: Person){
    this.listPersonnelService.delete(person.id!).subscribe(() => {
      this.random();
    });
  }

  ngOnInit(): void {
  }
}
