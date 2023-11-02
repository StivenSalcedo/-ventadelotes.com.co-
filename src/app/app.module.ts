import { NgModule } from '@angular/core';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// import third-party module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { IndexComponent } from './stage/index/index.component';
import { FeaturesComponent } from './stage/features/features.component';
import { AboutUsComponent } from './stage/about-us/about-us.component';
import { PricesComponent } from './stage/prices/prices.component';
import { ContactformComponent } from './contactform/contactform.component';

import { IconsComponent } from './icons/icons.component';

import { PageNoFoundComponent } from './stage/page-no-found/page-no-found.component';
import { FilterUrlPipe } from './filters/filter-url.pipe';
import { SupportComponent } from './stage/support/support.component';
import { BrowserModule } from '@angular/platform-browser';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
 
    IndexComponent,
    FeaturesComponent,
    AboutUsComponent,
    PricesComponent,
    ContactformComponent,
  
    IconsComponent,
    PageNoFoundComponent,
    FilterUrlPipe,
    SupportComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'misiil-web-site'
    }),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
