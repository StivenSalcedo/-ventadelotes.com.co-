import { Component, OnInit  } from '@angular/core';
import { faTicket, faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.sass'],
  host: {'class': 'w-100', }
})
export class SupportComponent implements OnInit {

  faWhatsapp = faWhatsapp;
  faTicket = faTicket;
  faHouseLaptop = faHouseLaptop;

  
  
  constructor(public meta: Meta, public title: Title,private router: Router,private translate1: TranslateService,private sanitizer: DomSanitizer) {
    this.title.setTitle('Soporte | Misiil');
    this.meta.updateTag({ name: 'description', content: 'Misiil cuenta con diferentes canales de comunicación que le permitirán recibir ayuda inmediata o hacer seguimiento a sus requerimientos' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.misiil.com/soporte/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Soporte | Misiil' });
    this.meta.updateTag({ property: 'og:description', content: 'Misiil cuenta con diferentes canales de comunicación que le permitirán recibir ayuda inmediata o hacer seguimiento a sus requerimientos' });
    this.meta.updateTag({ property: 'og:image', content: 'https://test.misiil.com/filescodes/no-borrar-files-companies/logo-mail.png' });
  }

  ngOnInit(): void {
    
  }

  getRoute(event) {
    var goRoute = event.target.getAttribute('data-link');
    this.router.navigate([goRoute]);
}

getTraslate(id:string){
  //console.log(this.translate1.instant(id));
 return this.sanitizer.bypassSecurityTrustHtml(this.translate1.instant(id));
}

}
