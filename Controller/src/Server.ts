import express, { NextFunction } from 'express';
import { Router, Request, Response } from 'express';
import cors from 'cors';
import "./Startup";

// Inicializa a Aplicação
import { setRoutes } from './routes/Routes'; // DEPOIS DE CARREGAR AS CONFIGS
import { getGlobalConfiguration, getLogger } from './GlobalContext';
import { ErrorHandler } from './core/middlewares/ErrorHandler';

getLogger().info("Initializing..");

const app = express();
const route = Router()

app.use(cors({
    origin: '*'
}));

app.use(express.json({
    limit: '1024mb'
}));
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', true);

setRoutes(route).then(() => {
    app.use((req, res, next) => {
        getLogger().info(req.method + " " + req.url);
        next();
    });

    app.use(route);
    app.use(ErrorHandler);
    app.listen(getGlobalConfiguration().AppPort, () => getLogger().info("Server is up!"))
});