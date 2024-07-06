import { Request, Response } from "express";

/**
 * Check if the Request Params contains the Interface Properties
 * @param sampleObj 
 * @param req 
 * @param res 
 * @returns 
 */
export function containsRequestParams(sampleObj: object, req: Request, res: Response) {    
    const interfaceProps : Array<string> = Object.keys(sampleObj as object).map((k) => k.toUpperCase().trim());;
    const requestParamsKeys = Object.keys(req.params).map((k) => k.toUpperCase().trim());
    const notInParams = interfaceProps.filter((x) => !requestParamsKeys.includes(x));
    if(notInParams.length > 0) {
        res.status(400);
        res.json({
            error: 'Invalid request params',
            notInParams: notInParams
        });

        return false;
    }

    return true;
}