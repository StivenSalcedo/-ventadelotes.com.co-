import { Component, Input, OnInit } from '@angular/core';
import { faStar, faCircleQuestion, faCheck, faXmark, faCheckDouble, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.sass'],
  host: {'class': 'w-100'}
})
export class PricesComponent implements OnInit {
  
  faStar = faStar;
  faCircleQuestion = faCircleQuestion;
  faCheck = faCheck;
  faXmark = faXmark;
  faCheckDouble = faCheckDouble;
  faMobileScreenButton = faMobileScreenButton;

  constructor(public meta: Meta, public title: Title) {
    this.title.setTitle('Precios | Misiil');
    this.meta.updateTag({ name: 'description', content: 'Cuatro planes, al mejor precio y con soporte dedicado' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.misiil.com/precios/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Precios | Misiil' });
    this.meta.updateTag({ property: 'og:description', content: 'Cuatro planes, al mejor precio y con soporte dedicado' });
    this.meta.updateTag({ property: 'og:image', content: 'https://test.misiil.com/filescodes/no-borrar-files-companies/logo-mail.png' });
  }

  

  ngOnInit(): void {
  }

}
