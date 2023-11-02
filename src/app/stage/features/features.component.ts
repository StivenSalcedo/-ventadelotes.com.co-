import { Component, OnInit } from '@angular/core';
import { faCheck, faIdCardAlt, faBoxOpen, faTruckLoading, faWarehouse, faIdCard, faPlaneDeparture, faShip, faChartPie, faFileInvoiceDollar, faTruck, faPercentage, faCalculator,  faRandom, faCog, faUserShield, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta,} from '@angular/platform-browser';

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

  public RoutesArray: {name: string; options: any; icon: IconDefinition, TitleModule:string,class?:string }[] = [
    {
      name: 'Integrations',
      TitleModule: 'PRICES.TABLE_TITLE_THIRTY',
      options: [
        
        { name: 'FEATURES.INTEGRATIONS_ONE', isToggle: true, isCollapsed: true, othertext:["FEATURES.INTEGRATIONS_ONE_ONE"] },
        { name: 'FEATURES.INTEGRATIONS_TWO', isToggle: true, isCollapsed: true, othertext:["FEATURES.INTEGRATIONS_TWO_ONE", "FEATURES.INTEGRATIONS_TWO_TWO", "FEATURES.INTEGRATIONS_TWO_THREE"] },
        { name: 'FEATURES.INTEGRATIONS_THREE', isToggle: true, isCollapsed: true, othertext:["FEATURES.INTEGRATIONS_THREE_ONE", "FEATURES.INTEGRATIONS_THREE_TWO", "FEATURES.INTEGRATIONS_THREE_THREE"] }
      ],
      icon:faBoxOpen,
      class:'col-12'
      
    },
    {
      name: 'Courier',
      TitleModule: 'FEATURES.COURIER_CERO',
      options: [
        
        { name: 'FEATURES.COURIER_ONE' },
        { name: 'FEATURES.TITLE_HISTORIAL' },
        { name: 'FEATURES.TITLE_DIRECT_PRINT' },
        { name: 'FEATURES.COURIER_TWO' },
        { name: 'FEATURES.TITLE_OTHERS', isToggle: true, isCollapsed: true, othertext:["FEATURES.TITLE_NOTIFICATIONS"]}
      ],
      icon:faBoxOpen,
      class:'col-md-6 col-lg-4'
    },
    {
      name: 'Cargo',
      TitleModule: 'PRICES.TABLE_TITLE_FIVETEEN',
      options: [
        
        { name: 'FEATURES.CARGO_ONE' },
        { name: 'FEATURES.CARGO_TWO' },
        { name: 'FEATURES.CARGO_THREE', isToggle: true, isCollapsed: true, othertext:["FEATURES.CARGO_THREE_ONE","FEATURES.CARGO_THREE_TWO", "FEATURES.CARGO_THREE_THREE"] },
        { name: 'FEATURES.TITLE_HISTORIAL' },
        { name: 'FEATURES.TITLE_OTHERS', isToggle: true, isCollapsed: true, othertext:["FEATURES.CARGO_OTHERS_FOUR", "FEATURES.TITLE_FORMATS"] }
      ],
      icon:faTruckLoading,
      class:'col-md-6 col-lg-4'     
    },
    {
      name: 'Warehouse',
      TitleModule: 'PRICES.TABLE_TITLE_TWENTYFIVE',
      options: [
        
        { name: 'FEATURES.WAREHOUSE_ONE' },
        { name: 'FEATURES.WAREHOUSE_TWO' },
        { name: 'FEATURES.WAREHOUSE_THREE' },
        { name: 'FEATURES.TITLE_DIRECT_PRINT' },
        { name: 'FEATURES.TITLE_OTHERS', isToggle: true, isCollapsed: true, othertext:["FEATURES.WAREHOUSE_OTHERS_FOUR"] }
      ],
      icon:faWarehouse,
      class:'col-md-6 col-lg-4'
    },
    {
      name: 'AIR',
      TitleModule: 'PRICES.TABLE_TITLE_TWENTYSIX',
      options: [
        
        { name: 'FEATURES.AIR_ONE' },
        { name: 'FEATURES.TITLE_DIRECT_PRINT' },
        { name: 'FEATURES.AIR_TWO', isToggle: true, isCollapsed: true, othertext:["FEATURES.AIR_TWO_ONE","FEATURES.AIR_TWO_TWO", "FEATURES.AIR_TWO_THREE"] }
      ],
      icon:faPlaneDeparture,
      class:'col-md-6 col-lg-4'  
    },
    {
      name: 'OCEAN',
      TitleModule: 'PRICES.TABLE_TITLE_TWENTYEIGHT',
      options: [
        
        { name: 'FEATURES.OCEAN_ONE' },
        { name: 'FEATURES.TITLE_DIRECT_PRINT' },
        { name: 'FEATURES.OCEAN_TWO', isToggle: true, isCollapsed: true, othertext:["FEATURES.OCEAN_TWO_ONE"] }
      ],
      icon:faShip,
      class:'col-md-6 col-lg-4'   
    },
    {
      name: 'CUSTOMS',
      TitleModule: 'PRICES.TABLE_TITLE_TWENTYNINE',
      options: [
        
        { name: 'FEATURES.CUSTOMS_ONE' },
        { name: 'FEATURES.CUSTOMS_TWO' },
        { name: 'FEATURES.CUSTOMS_THREE' }
      ],
      icon:faUserShield,
      class:'col-md-6 col-lg-4' 
    },
    {
      name: 'PBOX',
      TitleModule: 'PRICES.TABLE_TITLE_TWENTYFOUR',
      options: [
        
        { name: 'FEATURES.POBOX_ONE' },
        { name: 'FEATURES.POBOX_TWO' },
        { name: 'FEATURES.POBOX_FOUR', isToggle: true, isCollapsed: true, othertext:["FEATURES.POBOX_FOUR_ONE","FEATURES.POBOX_FOUR_TWO"] },
        { name: 'FEATURES.TITLE_OTHERS', isToggle: true, isCollapsed: true, othertext:["FEATURES.POBOX_OTHERS_SEVEN", "FEATURES.POBOX_OTHERS_FIVE", "FEATURES.POBOX_OTHERS_SIX"] }
      ],
      icon:faIdCard,
      class:'col-md-6 col-lg-4'     
    },
    {
      name: 'Reports',
      TitleModule: 'PRICES.TABLE_TITLE_NINETEEN',
      options: [
        
        { name: 'FEATURES.REPORTS_ONE' },
        { name: 'FEATURES.REPORTS_TWO' },
        { name: 'FEATURES.REPORTS_THREE' },
        { name: 'FEATURES.REPORTS_FOUR' }
      ],
      icon:faChartPie,
      class:'col-md-6 col-lg-4'   
    },
    
    {
      name: 'Pickups',
      TitleModule: 'PRICES.TABLE_TITLE_SEVENTEEN',
      options: [
        
        { name: 'FEATURES.PICKUPS_ONE' },
        { name: 'FEATURES.TITLE_DIRECT_PRINT' },
        { name: 'FEATURES.PICKUPS_TWO' },
        { name: 'FEATURES.TITLE_FORMATS' }
      ],
      icon:faTruck,
      class:'col-md-6 col-lg-4'   
    },
    {
      name: 'Billing',
      TitleModule: 'PRICES.TABLE_TITLE_THIRTYFOUR',
      options: [
        
        { name: 'FEATURES.INVOICE_ONE' },
        { name: 'FEATURES.TITLE_NOTIFICATIONS' },
        { name: 'FEATURES.INVOICE_TWO' },
        { name: 'FEATURES.INVOICE_THREE' },
        { name: 'FEATURES.TITLE_OTHERS', isToggle: true, isCollapsed: true, othertext:["FEATURES.INVOICE_OTHERS_FOUR"] }
      ],
      icon:faFileInvoiceDollar,
      class:'col-md-6 col-lg-4'    
    },
    {
      name: 'Rates',
      TitleModule: 'PRICES.TABLE_TITLE_SIXTEEN',
      options: [
        
        { name: 'FEATURES.RATES_ONE' },
        { name: 'FEATURES.RATES_TWO' },
        { name: 'FEATURES.RATES_THREE' },
        { name: 'FEATURES.RATES_FOUR' },
        { name: 'FEATURES.TITLE_OTHERS', isToggle: true, isCollapsed: true, othertext:["FEATURES.RATES_OTHER_FIVE"] }
      ],
      icon:faPercentage,
      class:'col-md-6 col-lg-4'   
    },
    {
      name: 'Accounting',
      TitleModule: 'PRICES.TABLE_TITLE_TWENTY',
      options: [
        
        { name: 'FEATURES.ACCOUNTING_ONE', isToggle: true, isCollapsed: true, othertext:["FEATURES.ACCOUNTING_ONE_ONE", "FEATURES.ACCOUNTING_ONE_TWO", "FEATURES.ACCOUNTING_ONE_THREE", "FEATURES.ACCOUNTING_ONE_FOUR", "FEATURES.ACCOUNTING_ONE_FIVE", "FEATURES.ACCOUNTING_ONE_SIX"] },
        { name: 'FEATURES.ACCOUNTING_TWO', isToggle: true, isCollapsed: true, othertext:["FEATURES.ACCOUNTING_TWO_ONE", "FEATURES.ACCOUNTING_TWO_TWO"] },
        { name: 'FEATURES.ACCOUNTING_THREE' },
        { name: 'FEATURES.ACCOUNTING_FOUR' },
        { name: 'FEATURES.TITLE_OTHERS', isToggle: true, isCollapsed: true, othertext:["FEATURES.ACCOUNTING_OTHER_FIVE", "FEATURES.ACCOUNTING_OTHER_SIX", ] }
      ],
      icon:faCalculator,
      class:'col-md-6 col-lg-4'    
    },
    {
      name: 'Configuration',
      TitleModule: 'PRICES.TABLE_TITLE_EIGHTEEN',
      options: [
        
        { name: 'FEATURES.CONFIGURATION_ONE' },
        { name: 'FEATURES.CONFIGURATION_TWO' },
        { name: 'FEATURES.CONFIGURATION_THREE' },
        { name: 'FEATURES.CONFIGURATION_FOUR' },
        { name: 'FEATURES.TITLE_OTHERS', isToggle: true, isCollapsed: true, othertext:["FEATURES.CONFIGURATION_OTHER_FIVE", "FEATURES.CONFIGURATION_OTHER_SEVEN", "FEATURES.CONFIGURATION_OTHER_EIGHT", "FEATURES.CONFIGURATION_OTHER_NINE", "FEATURES.CONFIGURATION_OTHER_TEN", "FEATURES.CONFIGURATION_OTHER_ELEVEN", "FEATURES.CONFIGURATION_OTHER_TWELVE", "FEATURES.CONFIGURATION_OTHER_THIRTEEN", "FEATURES.CONFIGURATION_OTHER_FOURTEEN", "FEATURES.CONFIGURATION_OTHER_FIVETEEN", "FEATURES.CONFIGURATION_OTHER_SIXTEEN", "FEATURES.CONFIGURATION_OTHER_SEVENTEEN", "FEATURES.CONFIGURATION_OTHER_EIGHTEEN", "FEATURES.CONFIGURATION_OTHER_NINETEEN", "FEATURES.CONFIGURATION_OTHER_TWENTY", "FEATURES.CONFIGURATION_OTHER_TWENTY_ONE", "FEATURES.CONFIGURATION_OTHER_TWENTY_TWO", "FEATURES.CONFIGURATION_OTHER_TWENTY_THREE", "FEATURES.CONFIGURATION_OTHER_TWENTY_FOUR", "FEATURES.CONFIGURATION_OTHER_TWENTY_FIVE"] }
      ],
      icon:faCog,
      class:'col-md-6 col-lg-4'
    }
  ];

  constructor(public meta: Meta, public title: Title) {

    
    this.title.setTitle('Características | Misiil');
    this.meta.updateTag({ name: 'description', content: 'Mas de 100 características que podrás obtener en cualquier momento' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.misiil.com/caracteristicas/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Características | Misiil' });
    this.meta.updateTag({ property: 'og:description', content: 'Mas de 100 características que podrás obtener en cualquier momento' });
    this.meta.updateTag({ property: 'og:image', content: 'https://test.misiil.com/filescodes/no-borrar-files-companies/logo-mail.png' });
  }

  ngOnInit(): void {
  }

}
