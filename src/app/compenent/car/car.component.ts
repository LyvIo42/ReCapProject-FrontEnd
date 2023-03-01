import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brands } from 'src/app/models/brands';
import { CarImages } from 'src/app/models/carimages';
import { Cars } from 'src/app/models/cars';
import { Colors } from 'src/app/models/colors';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
})
export class CarComponent implements OnInit {
  cars: Cars[] = [];
  brands: Brands[] = [];
  colors: Colors[] = [];

  imageUrl = 'https://localhost:44363/images/uploads/';
  carImages: CarImages[];

  dataLoaded = false;
  currentCar: Cars | null;
  filterText = '';
  brandFilter: number = 0;
  colorFilter: number = 0;

  constructor(
    private carService: CarService,
    private activatedRouted: ActivatedRoute,
    private carImageService: CarImageService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.activatedRouted.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarByColor(params['colorId']);
      } else if (params['carId']) {
        this.getCarById(params['carId']);
      } else {
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getCarByColor(colorId: number) {
    this.carService.getCarByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarImage(car: Cars): string {
    
    const url = `${this.imageUrl}`;
    if (car.imagePath) {
      return `${url+car.imagePath}.jpg`;
    }
    return url + 'default.png';
  }
  setCurrentCar(car: Cars) {
    this.currentCar = car;
  }

  getCarById(carId: number) {
    this.carService.getCarsByBrand(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColorAndBrand(brandId: number, colorId: number) {
    this.carService
      .getCarsByColorAndBrand(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
        this.dataLoaded = true;
      });
  }

  reset() {
    this.currentCar = null;
  }
}
