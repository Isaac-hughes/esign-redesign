import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { CommonComponentsModule } from "./common-components/common-components.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { EcoSectionComponent } from './eco-section/eco-section.component';
import { EsignInfoComponent } from './esign-info/esign-info.component';
import { ProductsComponent } from './products/products.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeroComponent,
    MyCarouselComponent,
    ParallaxComponent,
    EcoSectionComponent,
    EsignInfoComponent,
    ProductsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
