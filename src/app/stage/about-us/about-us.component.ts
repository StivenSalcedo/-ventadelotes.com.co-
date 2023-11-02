import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactformComponent } from '../../contactform/contactform.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass'],
  providers: [NgbModalConfig, NgbModal],
  host: {'class': 'w-100', }
})
export class AboutUsComponent implements OnInit {
  
  constructor(public router: Router, config: NgbModalConfig, private modalService: NgbModal, public meta: Meta, public title: Title) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.title.setTitle('Sobre nosotros | Misiil');
    this.meta.updateTag({ name: 'description', content: 'Somos una empresa de tecnología con más de 6 años de trayectoria. Brindamos una solución tecnológica para empresas de carga y transporte.' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.misiil.com/sobre-nosotros/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Sobre nosotros | Misiil' });
    this.meta.updateTag({ property: 'og:description', content: 'Somos una empresa de tecnología con más de 6 años de trayectoria. Brindamos una solución tecnológica para empresas de carga y transporte.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://test.misiil.com/filescodes/no-borrar-files-companies/logo-mail.png' });

    
    
   }

   openLg() {
    this.modalService.open(ContactformComponent, { size: 'lg' });
  }

  ngOnInit(): void {
    
  }

}
