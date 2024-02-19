import { Component, OnInit } from '@angular/core';
import { faCheck, faIdCardAlt, faBoxOpen, faTruckLoading, faWarehouse, faIdCard, faPlaneDeparture, faShip, faChartPie, faFileInvoiceDollar, faTruck, faPercentage, faCalculator,  faRandom, faCog, faUserShield, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta,} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass'],
  host: {'class': 'w-100'}
})
export class FeaturesComponent implements OnInit {

  public isPayGateway = true;
  public isPayGateway2 = true;
  public isOthersCourier = true;
  public isIntegrations = true;
  public isOthersCargo = true;
  Feature: string | null;
  
  
  faCheck = faCheck;
  faBoxOpen = faBoxOpen;
  faTruckLoading = faTruckLoading;
  faWarehouse = faWarehouse;  
  faIdCardAlt =faIdCardAlt;
  faUserShield = faUserShield;
  faPlaneDeparture = faPlaneDeparture;
  faShip = faShip;
  faChartPie = faChartPie;
  faFileInvoiceDollar = faFileInvoiceDollar;
  faTruck = faTruck;
  faPercentage = faPercentage;
  faCalculator = faCalculator;
  faRandom = faRandom;
  faCog  = faCog;
  activeTab:any = "/beneficios/confianza";
  Page: any = {};
  Pages: any = [];

  toggleDisabled() {
    //this.disabled = !this.disabled;
   // if (this.disabled) {
      //this.activeTab = '/beneficios/confianza';
   // }
  }

 

  constructor(public meta: Meta, public title: Title, private _Activatedroute: ActivatedRoute,private router: Router, private service: PostService) {

  
    
    
  }

  ngOnInit(): void {
    this.Feature =this.router.url;
    if(this.Feature=="/beneficios" || this.Feature=="" || this.Feature=="/")
    {
      this.Feature="/beneficios/ubicacion";
    }
    try{
      setTimeout(function(){
        let el = document.getElementById('location');
        el.scrollIntoView();
      },1500)
    }
    catch(ex)
    {

    }

    this.service.getPosts('get', {}, '/paginas?filters[titulo][$eq]=beneficios')
      .subscribe({
        next: data => {
          this.Pages = data;
          this.Page = this.Pages.data;
          if (this.Pages.data.length > 0) {
            this.ChangeMeta(this.Pages.data[0].attributes.metadata);
          }
          else {
            this.ChangeMeta([]);
          }
        },
        error: error => {
        }
      });
    
   
  }
  ChangeMeta(Data?: any[]) {
    this.meta.removeTag('description');
    this.meta.removeTag('title');
    this.meta.removeTag('description');
    this.meta.removeTag('url');
    this.meta.removeTag('type');
    try {
      
      this.meta.removeTag('keywords');
      this.meta.removeTag('subject');
      this.meta.removeTag('copyright');
      this.meta.removeTag('language');
      this.meta.removeTag('robots');
      this.meta.removeTag('revised');
      this.meta.removeTag('abstract');
      this.meta.removeTag('topic');
      this.meta.removeTag('summary');
      this.meta.removeTag('Classification');
      this.meta.removeTag('author');
      this.meta.removeTag('designer');
      this.meta.removeTag('reply-to');
      this.meta.removeTag('owner');
      this.meta.removeTag('url');
      this.meta.removeTag('identifier-URL');
      this.meta.removeTag('directory');
      this.meta.removeTag('pagename');
      this.meta.removeTag('category');
      this.meta.removeTag('coverage');
      this.meta.removeTag('distribution');
      this.meta.removeTag('rating');
      this.meta.removeTag('revisit-after');
      this.meta.removeTag('subtitle');
      this.meta.removeTag('target');
      this.meta.removeTag('HandheldFriendly');
      this.meta.removeTag('MobileOptimized');
      this.meta.removeTag('date');
      this.meta.removeTag('search_date');
      this.meta.removeTag('ResourceLoaderDynamicStyles');
      this.meta.removeTag('medium');
      this.meta.removeTag('syndication-source');
      this.meta.removeTag('original-source');
      this.meta.removeTag('verify-v1');
      this.meta.removeTag('y_key');
      this.meta.removeTag('pageKey');
      this.meta.removeTag('image');
      this.meta.removeTag('site_name');
      this.meta.removeTag('page_id');
      this.meta.removeTag('application-name');
      this.meta.removeTag('email');
      this.meta.removeTag('phone_number');
      this.meta.removeTag('fax_number');
      this.meta.removeTag('latitude');
      this.meta.removeTag('longitude');
      this.meta.removeTag('street-address');
      this.meta.removeTag('locality');
      this.meta.removeTag('region');
      this.meta.removeTag('postal-code');
      this.meta.removeTag('country-name');
      this.meta.removeTag('video');
      this.meta.removeTag('audio');
      this.meta.removeTag('og:description');
    this.meta.removeTag('og:title');
    this.meta.removeTag('og:description');
    this.meta.removeTag('og:url');
    this.meta.removeTag('og:type');
    this.meta.removeTag('og:image');
    this.meta.removeTag('og:image:secure_url');
    }
    catch (ex) { }
    if (Data.length > 0) {
      Data.forEach((data: any, index2: number) => {
        if (data.tipo == 'tittle') {
          this.title.setTitle(data.valor);
        }
        else if (data.tipo == 'property') {
          this.meta.updateTag({ property: data.nombre, content: data.valor });
        }
        else if (data.tipo == 'name') {
          this.meta.updateTag({ name: data.nombre, content: data.valor });
        }
      })
    }
    else {
      this.title.setTitle('Venta de lotes | Ibague');
      this.meta.updateTag({ name: 'description', content: 'venta de lotes' });
      this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
      this.meta.updateTag({ property: 'og:url', content: 'https://ventadelotes.com.co/' });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:title', content: 'Venta De Lotes | Ibague' });
      this.meta.updateTag({ property: 'og:description', content: 'venta de lotes' });
    }
  }

}
