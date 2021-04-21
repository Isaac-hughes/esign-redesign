import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-carousel',
  template: `
  <carousel class="carousel"
  [images]="images" [loop]="true" [autoplay]="true" [autoplayInterval]="2000" [pauseOnHover]="true" [transitionDuration]="800" [cellWidth]="200" [margin]="40" [cellsToScroll]="2">
  </carousel>
  `,
  styles: [
    '.carousel{z-index: 1;}'
  ]
})
export class MyCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {path: '../../assets/brand-logos/armarni-logo.png'},
    {path: '../../assets/brand-logos/aunt-bessies.png'},
    {path: '../../assets/brand-logos/nfu-logo.png'},
    {path: '../../assets/brand-logos/dhl-logo.png'},
    {path: '../../assets/brand-logos/multivac-logo.png'},
    {path: '../../assets/brand-logos/Nandos-Logo.png'},
    {path: '../../assets/brand-logos/nhs-logo.png'},
    {path: '../../assets/brand-logos/ty-logo.png'},
    {path: '../../assets/brand-logos/uk-fuels-logo.png'},
    {path: '../../assets/brand-logos/uni-chirch-logo.png'},
    {path: '../../assets/brand-logos/virgin-pure_logo.png'}
    
]

}
