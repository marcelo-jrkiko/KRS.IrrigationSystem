import { NextFunction, Response, Request } from "express"

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("Error ocurred: ");
    console.error(err);

    res.status(500);
    res.end();
}
