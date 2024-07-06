import { NextFunction, Response, Request } from "express"
import { getGlobalConfiguration } from "../../GlobalContext";

export const SecureKeyMiddleware = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const auth = req.header("X-ApiKey");
        if (auth !== undefined && auth !== null) {
            const apiKey = getGlobalConfiguration().SecureKey;
            if(apiKey == auth.toString()) {
                next();
            }
            else {
                res.status(401);
                res.end();
            }
        }
        else {
            res.status(401);
            res.end();
        }
    }
}