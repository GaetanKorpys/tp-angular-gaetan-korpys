import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  constructor() { }

  @Input() employe: Person | undefined;

  @Output('personDelete') deleteCarte$: EventEmitter<any> = new EventEmitter();

  @Output('personUpdate') update$: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  delete() {
    this.deleteCarte$.emit(this.employe);
  }

  update() {
    this.update$.emit(this.employe);
  }

}
