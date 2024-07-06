import { Permissions as __MODEL__Permissions } from '__PERMISSIONS_PATH';
import { Router, Request, Response } from 'express';
import { PermissionMiddleware } from '__MIDDLEWARES__/PermissionCheck';
import { jwtmiddleware } from '__MIDDLEWARES__/JwtAuth';
import { __MODEL__Controller } from '__MODEL__CONTROLLER_PATH';
import { RequestParamCheckMiddleware } from '__MIDDLEWARES__/RequestParamsCheck';

export function setRoutes(route: Router) {
    route.post('/__NMSPACE_L__/__MODEL_L__/save',
    
        jwtmiddleware,
         PermissionMiddleware(__MODEL__Permissions.Save), 
    
    async (req: Request, res: Response) => {
        const controller = new __MODEL__Controller();
        await controller.save(req,res);
    });
    
    route.delete('/__NMSPACE_L__/__MODEL_L__/delete/:id', 
    
        jwtmiddleware,
        PermissionMiddleware(__MODEL__Permissions.Delete),
        RequestParamCheckMiddleware({ id: 0 }),
        
    async (req: Request, res: Response) => {
        const controller = new __MODEL__Controller();
        await controller.delete(req,res);
    });

    route.get('/__NMSPACE_L__/__MODEL_L__/find/:offset/:limit', 

        jwtmiddleware, 
        PermissionMiddleware(__MODEL__Permissions.Read),
        RequestParamCheckMiddleware({ limit: 0, offset: 0 }),

    async (req: Request, res: Response) => {
        const controller = new __MODEL__Controller();
        await controller.find(req,res);
    });

    route.get('/__NMSPACE_L__/__MODEL_L__/get/:id', 
        
        jwtmiddleware, 
        PermissionMiddleware(__MODEL__Permissions.Read),  
        RequestParamCheckMiddleware({ id: 0 }), 
    
    async (req: Request, res: Response) => {
        const controller = new __MODEL__Controller();
        await controller.get(req,res);
    });
}