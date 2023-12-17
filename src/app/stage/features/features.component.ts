import { Component, OnInit } from '@angular/core';
import { faCheck, faIdCardAlt, faBoxOpen, faTruckLoading, faWarehouse, faIdCard, faPlaneDeparture, faShip, faChartPie, faFileInvoiceDollar, faTruck, faPercentage, faCalculator,  faRandom, faCog, faUserShield, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta,} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

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


  toggleDisabled() {
    //this.disabled = !this.disabled;
   // if (this.disabled) {
      //this.activeTab = '/beneficios/confianza';
   // }
  }

 

  constructor(public meta: Meta, public title: Title, private _Activatedroute: ActivatedRoute,private router: Router) {

    
    this.title.setTitle('Características | Misiil');
    this.title.setTitle('Venta de lotes | Ibague');
    this.meta.updateTag({ name: 'description', content: 'venta de lotes' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ventadelotes.com.co/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Venta De Lotes | Ibague' });
    this.meta.updateTag({ property: 'og:description', content: 'venta de lotes' });

    
    
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
    
   
  }

}
