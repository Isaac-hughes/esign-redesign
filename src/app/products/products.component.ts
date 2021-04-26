import { Component, OnInit } from '@angular/core';
import { Products } from './products-data'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count: number= 0
  isUpDisabled: boolean = false
  isDownDisabled: boolean = false
 


  currentProduct: any = Products[0]

  imgSrc: string = this.currentProduct.src
  title: string = this.currentProduct.title
  content: string = this.currentProduct.content

  

  getNewProduct = () => {
    this.currentProduct = Products[this.count]
    this.imgSrc = this.currentProduct.src
    this.title = this.currentProduct.title
    this.content = this.currentProduct.content
  }
  

  checkDisabled = () => {
    if (this.count <= 0){
      this.isDownDisabled = true
      this.isUpDisabled = false
    } else if (this.count <= 5 && this.count >= 1) {
      this.isDownDisabled = false
      this.isUpDisabled = false
    } else if (this.count >= 6){
      this.isUpDisabled = true
      this.isDownDisabled = false
    }
  }

  upArrowClick = () => {
    let num = this.count
    if (num >= 5){
      this.isUpDisabled = true
    } else {
      this.isUpDisabled = false
      this.count = num + 1
      console.log(this.count)
      this.getNewProduct()
      this.checkDisabled()
    }
  }
  
  downArrowClick = () => {
    let num = this.count
    if (num <= 0){
      this.isDownDisabled = true
    } else {
      this.isDownDisabled = false
      this.count = num - 1
      console.log(this.count)
      this.getNewProduct()
      this.checkDisabled()
    }
  }
}
