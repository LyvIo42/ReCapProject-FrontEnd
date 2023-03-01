import { Brands } from "./brands";
import { ResponseModel } from "./responseModel";

export interface BrandResponseModel extends ResponseModel{
    data:Brands[];
}