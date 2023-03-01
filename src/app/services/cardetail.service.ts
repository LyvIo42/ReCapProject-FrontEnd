import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  apiUrl = '  https://localhost:44363/api/';
  constructor(private httpClient:HttpClient) { }

  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycarid?carid=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}

