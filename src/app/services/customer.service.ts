import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44363/api/customers/getall';
  constructor(private httClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel> {
    return this.httClient.get<CustomerResponseModel>(this.apiUrl)
  }
}