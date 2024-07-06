import { NextFunction, Response, Request } from "express"
import { containsRequestParams } from "../helpers/RequestHelper"

export const RequestParamCheckMiddleware = (paramsContract: object) => {
    return async (req: Request, res: Response, next: NextFunction) => {
       const isValid = containsRequestParams(paramsContract, req, res);

       if(isValid) {
            next();
       } 
    }
}