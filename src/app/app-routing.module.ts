import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//stages
import { IndexComponent } from './stage/index/index.component';

import { AboutUsComponent } from './stage/about-us/about-us.component';
import { PricesComponent } from './stage/prices/prices.component';
import { FeaturesComponent } from './stage/features/features.component';

import { DisabledComponent } from './stage/disabled/disabled.component';
import { ContactformComponent } from './contactform/contactform.component';
import { PageNoFoundComponent } from './stage/page-no-found/page-no-found.component';

 

const routes : Routes = [
  { path: '', component: IndexComponent},
  { path: 'sobre-nosotros', component: AboutUsComponent},
  { path: 'sobre-nosotros/', component: AboutUsComponent},
  { path: 'precios', component: PricesComponent},
  { path: 'caracteristicas', component: FeaturesComponent},
  { path: 'sistema-suspendido', component: DisabledComponent},
  { path: 'contacto', component: ContactformComponent},

  { path: ':category', component: IndexComponent,children: [{
    path: ':slug',component: IndexComponent}]
  }
  ,{ path: 'pagina-no-encontrada', component: PageNoFoundComponent }
  ,{ path: '**', component: PageNoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
	  initialNavigation: 'enabledBlocking',
    anchorScrolling: 'enabled',
    useHash: false,relativeLinkResolution: 'corrected'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

