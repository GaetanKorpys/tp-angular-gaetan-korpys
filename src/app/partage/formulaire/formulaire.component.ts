import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Music } from 'src/app/model/Music';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  form: FormGroup;
  @Input() musicModel: Music;
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.musicModel = {
      styles: []
    };
  }

  ngOnInit() {
    debugger;
    this.form.patchValue({
      id: this.musicModel.id,
      title: this.musicModel.title,
      description: this.musicModel.description,
      album: this.musicModel.album,
      artist: this.musicModel.artist,
      duration: this.musicModel.duration,
      date: this.musicModel.date,
      picture: this.musicModel.picture,
      styles: this.musicModel.styles || []
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(music: Music) { //Formulaire
    music.picture = this.musicModel.picture;
    this.submitEvent$.emit(music);
  }


  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.musicModel.styles!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(style: any): void {
    const index = this.musicModel.styles!.indexOf(style);
    this.musicModel.styles!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.musicModel.picture = reader.result;
        }
    }
  }

  /**
   * Fonction pour construire notre formulaire
   * @returns {FormGroup}
   *
   * @private
   */
  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
      album: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      artist: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      duration: new FormControl('', Validators.compose([Validators.required, /**Validators.pattern('^\d{1,2}([.,]\d{1,2})?\s*(minute|min|mins)$')*/])),
      date: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')])),
    });
  }



}
