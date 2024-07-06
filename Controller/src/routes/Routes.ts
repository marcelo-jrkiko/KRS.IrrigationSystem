import { Router, Request, Response, NextFunction } from 'express';
import { getLogger } from '../GlobalContext';
import * as glob from 'glob';
import * as path from 'path';

//__E_GENERATOR_APPEND DONT REMOVE

function listAllRoutes() {
    const pattern = 'src/routes/**/*.Routes.ts';
    return glob.sync(pattern).map((p) => path.resolve(p));
}


export async function setRoutes(route: Router) {
    route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        getLogger().error("Request error", err);
        res.status(500);
    });

    route.get("/", (req: Request, res: Response) => {
        res.json({
            'App' : process.env.APP_NAME            
        })
    });    


    const allRoutes = listAllRoutes();
    allRoutes.forEach(async routeFn => {
        const routeFileParts = path.parse(routeFn);
        getLogger().info('[Router] ' + routeFileParts.name);

        const routeModule = await require(routeFn);
        routeModule.setRoutes(route);

        getLogger().info('[Router] Loaded ' + routeFileParts.name);
    });
}