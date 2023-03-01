import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImages } from '../models/carimages';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44363/api/';
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImages>>{
    let newPath = this.apiUrl + "CarImages/getall"
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);    
   }
   
   
   getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImages>>{
    let newPath = this.apiUrl + "api/CarImages/getbycarid?carId="+carId 
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);     
   }
 
   getByCarId(carId:number):Observable<ListResponseModel<CarImages>>{
     let newPath = this.apiUrl + "api/carimages/getbycarid?carId=" + carId;
     return this.httpClient.get<ListResponseModel<CarImages>>(newPath)
   }
   getImagePath(carImage: string):Observable<ListResponseModel<CarImages>>{
     let newPath = this.apiUrl+"uploads/images/="+carImage
     return this.httpClient.get<ListResponseModel<CarImages>>(newPath)
   }
}
