import { Rentals } from "./rentals";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:Rentals[]
}