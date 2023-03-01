import { Colors } from "./colors";
import { ResponseModel } from "./responseModel";

export interface ColorResponseModel extends ResponseModel{
    data:Colors[];
}
