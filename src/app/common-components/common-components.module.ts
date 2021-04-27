import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PsnCompliantComponent } from "./psn-compliant/psn-compliant.component";



@NgModule({
  declarations: [
    NavBarComponent,
    PageFooterComponent,
    PsnCompliantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    PageFooterComponent,
    PsnCompliantComponent
  ]
})
export class CommonComponentsModule { }
