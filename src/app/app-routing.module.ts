import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//stages
import { IndexComponent } from './stage/index/index.component';
import { FeaturesComponent } from './stage/features/features.component';
import { PageNoFoundComponent } from './stage/page-no-found/page-no-found.component';
import { BaseComponent } from './base/base.component';

 

const routes : Routes = [
  { path: '', component: IndexComponent},
  { path: 'beneficios', component: FeaturesComponent,children: [{path: ':slug',component: FeaturesComponent}]},
  { path: ':category', component: BaseComponent,children: [{
    path: ':slug',component: BaseComponent}]
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

