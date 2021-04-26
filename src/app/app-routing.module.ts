import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageHeroComponent } from './page-hero/page-hero.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'new-page', component: PageHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
