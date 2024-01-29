import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-langue-bouton',
  templateUrl: './langue-bouton.component.html',
  styleUrls: ['./langue-bouton.component.scss']
})
export class LangueBoutonComponent implements OnInit {

  constructor(private translate: TranslateService) { }​
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  useLanguage(language: string): void {​
    this.translate.use(language);​
  }

}
