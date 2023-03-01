
import { Customers } from "./customers";
import { ResponseModel } from "./responseModel";

export interface CustomerResponseModel extends ResponseModel{
    data:Customers[];
}