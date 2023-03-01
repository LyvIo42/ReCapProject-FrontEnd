import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImages } from 'src/app/models/carimages';
import { Cars } from 'src/app/models/cars';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent {
  image:CarImages[]=[];
  carsdetail:Cars[]=[];
  imageUrl = "https://localhost:44363/uploads/images/"
  carImages:CarImages[] = [];
  currentCar:Cars
  currentImage: CarImages;
  dataLoaded = false ;
  

 
  constructor(private carService: CarService,
   private activatedToute:ActivatedRoute,
   private carImageService:CarImageService,

  ){}

   ngOnInit(): void {
     this.activatedToute.params.subscribe(params => {
       this.getCarById(params["carId"])
       this.getImageByCarId(params["carId"])
     })
   }
   getImageByCarId(carId:number){
     this.carImageService.getByCarId(carId).subscribe(response => {
       this.carImages = response.data;
       this.dataLoaded=true;

     })
   }

   getImagePath(carImage: CarImages) {
    let path = this.imageUrl + carImage.imagePath;
    return path;
   }

   getCars(){
     this.carService.getCars(). subscribe((response)=>{
       this.carsdetail=response.data
       this.dataLoaded=true;
       
     })
   }
   getCarById(id:number) {
     this.carService.getCarById(id).subscribe(response => {
     this.carsdetail = response.data;
     this.dataLoaded = true;
     })
   
   } getCarImage(car:Cars){
   if (car.imagePath == null) {
     let path = this.imageUrl + "NoImage.png"
     return path;

   }
   else{
     let path = this.imageUrl + car.imagePath;
     return path;
   }
 }
 
 getButtonClass(image: CarImages) {
   if ((image === this.carImages[0])) {
     return 'active';
   } else {
     return '';
   }
 }

 getCurrentImageClass(image: CarImages) {
   if (this.carImages[0] == image) {
     return 'carousel-item active';
   } else {
     return 'carousel-item ';
   }
 }

 setCurrentImageClass(image: CarImages) {
   this.currentImage = image;
   this.dataLoaded=true;

 }
 setCurrentCar(car:Cars){
   this.currentCar=car;
 }

 

 
}
