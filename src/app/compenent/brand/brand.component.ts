import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/models/brands';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
brands:Brands[]=[];
currentBrand:Brands |null;
  brand: Brands;
constructor(private brandService:BrandService){}
  ngOnInit(): void {
   this.getBrands();
  }

getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data;
  })
}
setCurrentBrand(brand:Brands){
  this.currentBrand=brand;
}
getCurrentBrandClass(brand:Brands){
  if (brand == this.currentBrand) {
    return "list-group-item active"
  }else{
    return"list-group-item"
  }
}
  getAllBrandClass(){
    if (!this.currentBrand) {
      return "list-group-item active"     
    }else{
      return"list-group-item"

    }
  }

  reset(){
    this.currentBrand = null;

  }

}