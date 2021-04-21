import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrls: ['./page-hero.component.css']
})
export class PageHeroComponent implements OnInit {
  
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
