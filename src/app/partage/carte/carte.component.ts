import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Music } from 'src/app/model/Music';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  constructor() { }

  @Input() music: Music | undefined;

  @Output('personDelete') deleteCarte$: EventEmitter<any> = new EventEmitter();

  @Output('personUpdate') update$: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  delete() {
    this.deleteCarte$.emit(this.music);
  }

  update() {
    this.update$.emit(this.music);
  }

}
