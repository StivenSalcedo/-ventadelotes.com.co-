import { NgModule } from '@angular/core';

import {HttpClientModule, HttpClient} from '@angular/common/http';
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
import { IconsComponent } from './icons/icons.component';
import { PageNoFoundComponent } from './stage/page-no-found/page-no-found.component';
import { FilterUrlPipe, orderByPipe } from './filters/filter-url.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    FeaturesComponent,
    IconsComponent,
    PageNoFoundComponent,
    FilterUrlPipe,
    BaseComponent,
    orderByPipe
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'Lotes'
    }),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
