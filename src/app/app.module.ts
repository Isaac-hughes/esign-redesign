import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PsnCompliantComponent } from './psn-compliant/psn-compliant.component';
import { EcoSectionComponent } from './eco-section/eco-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageFooterComponent,
    PageHeroComponent,
    MyCarouselComponent,
    ParallaxComponent,
    PsnCompliantComponent,
    EcoSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
