import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeroComponent } from './page-hero/page-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageFooterComponent,
    PageHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
