import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { faBoxOpen, faTruckLoading, faWarehouse, faIdCard, faPlaneDeparture, faShip, faChartPie, faFileInvoiceDollar, faTruck, faPercentage, faCalculator,  faRandom, faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';
import {Url} from '../filters/url';


@Component({
  selector: 'app-icons',
 
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.sass']
})

export class IconsComponent implements OnInit {

  faBoxOpen = faBoxOpen;
  faTruckLoading = faTruckLoading;
  faWarehouse = faWarehouse;
  faIdCard = faIdCard;
  faPlaneDeparture = faPlaneDeparture;
  faShip = faShip;
  faChartPie = faChartPie;
  faFileInvoiceDollar = faFileInvoiceDollar;
  faTruck = faTruck;
  faPercentage = faPercentage;
  faCalculator = faCalculator;
  faRandom = faRandom;
  faCog  = faCog;
  @Output() SendData = new EventEmitter();
  public RoutesArray:Url[];
  filter: Url = new Url(); 

  constructor(public router: Router) {       
  }
  
  ngOnInit(): void {
    this.filter.RemoveRight=false;
    this.RoutesArray=[
      {path:"/modulos/mensajeria/",icon:faBoxOpen,name:"NAME_MODULES.TITLE_COURIER",ClassHidden:"",IconMenu:"",RemoveRight:true},
      {path:"/modulos/manifiestos/",icon:faTruckLoading,name:"NAME_MODULES.TITLE_CARGO",ClassHidden:"",IconMenu:"",RemoveRight:true},
      {path:"/modulos/bodega/",icon:faWarehouse,name:"NAME_MODULES.TITLE_WAREHOUSE",ClassHidden:"d-none d-sm-block",IconMenu:"d-sm-none",RemoveRight:false},
      {path:"/modulos/casilleros/",icon:faIdCard,name:"NAME_MODULES.TITLE_POBOX",ClassHidden:"d-none d-sm-block",IconMenu:"d-sm-none",RemoveRight:false},
      {path:"/modulos/aereo/",icon:faPlaneDeparture,name:"NAME_MODULES.TITLE_AIR",ClassHidden:"d-none d-md-block",IconMenu:"d-md-none",RemoveRight:false},
      // {path:"/modulos/maritimo/",icon:faShip,name:"NAME_MODULES.TITLE_OCEAN",ClassHidden:"d-none d-md-block",IconMenu:"d-md-none",RemoveRight:false},
      {path:"/modulos/reportes/",icon:faChartPie,name:"NAME_MODULES.TITLE_REPORTS",ClassHidden:"d-none d-lg-block",IconMenu:"",RemoveRight:false},
      // {path:"/modulos/facturacion/",icon:faFileInvoiceDollar,name:"NAME_MODULES.TITLE_INVOICE",ClassHidden:"d-none d-lg-block",IconMenu:"",RemoveRight:false},
      // {path:"/modulos/recogidas/",icon:faTruck,name:"NAME_MODULES.TITLE_PICKUPS",ClassHidden:"d-none d-lg-block",IconMenu:"",RemoveRight:false},
      {path:"/modulos/tarifas/",icon:faPercentage,name:"NAME_MODULES.TITLE_RATES",ClassHidden:"d-none d-lg-block",IconMenu:"",RemoveRight:false},
      // {path:"/modulos/contabilidad/",icon:faCalculator,name:"NAME_MODULES.TITLE_ACCOUNTING",ClassHidden:"d-none d-lg-block",IconMenu:"",RemoveRight:false},
      {path:"/modulos/misiil-hub/",icon:faRandom,name:"NAME_MODULES.TITLE_MISIILHUB",ClassHidden:"d-none d-lg-block",IconMenu:"",RemoveRight:false},
      {path:"/modulos/configuracion/",icon:faCog,name:"NAME_MODULES.TITLE_CONFIGURATION",ClassHidden:"d-none d-lg-block",IconMenu:"",RemoveRight:false}
    ];
     
  }
  
  
  OnclickLink(Url:String)
  {
    
    this.router.navigate([Url]);
    this.SendData.emit([{ Url: Url }]);
  }
  OnlyRemoveRight(RoutesArray:any):any
  {
    return RoutesArray.RemoveRight==false;
  }

}


