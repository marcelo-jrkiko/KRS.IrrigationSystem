import * as dotenv from 'dotenv';
import { IConfig, ModelBuilder, DialectPostgres } from 'sequelize-typescript-generator';
import * as path from 'path';
import { Dialect } from 'sequelize-typescript-generator/build/dialects/Dialect';
import * as minimist from 'minimist';
import * as fs from 'fs';
import * as pluralize from 'pluralize';
import { pascalCase } from 'change-case';
import { TransformTarget } from 'sequelize-typescript-generator/build/config/IConfig';

function _TransformModelName (value: string, target: TransformTarget) : string {
    let newValue = pascalCase(value);

    if(target == TransformTarget.MODEL) {
        newValue = pascalCase(pluralize.singular(value));
    }

    return newValue;
}

async function generateModel(GeneratorConfig: any, tableName: string, namespace: string, schema: string)  {
    let modelOutput = "";
    modelOutput = path.resolve(GeneratorConfig.Models, namespace);

    // Config
    const config: IConfig = {
        connection: {
            dialect: GeneratorConfig.dialect,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            schema: schema
        },
        metadata: {
            case: _TransformModelName,
            indices: false,
            tables: [
                tableName.trim().toLowerCase()
            ],
            schema: schema
        },
        output: {
            outDir: modelOutput,
            clean: false
        },
        strict: false
    };

    // Set dialect
    let dbDialect: Dialect | null = null;
    if (GeneratorConfig.dialect == 'postgres') {
        dbDialect = new DialectPostgres();
    }

    // 
    const builder = new ModelBuilder(config, dbDialect!);
    await builder.build();
}

async function generateController(repoPath: string, GeneratorConfig: any, tableName: string, namespace: string) {
    const modelName = pascalCase(pluralize.singular(tableName));
    
    const controllerPath = path.resolve(GeneratorConfig.Controllers, namespace, modelName + "Controller.ts");
    const templatePath = path.resolve( __dirname, 'templates', 'Controller.t.ts');    
    const modelPath = path.resolve(GeneratorConfig.Models, namespace, modelName);    
    
    const repoPathObj = path.parse(repoPath);
    const repoPathNoExt = path.resolve(repoPathObj.dir, repoPathObj.name);

    // -
    const trailReg = new RegExp("\\\\", 'g');

    const baseControllerFPath = path.resolve(GeneratorConfig.src, 'core', 'domain', 'ModelController');
    const baseControllerRPath = path.relative(controllerPath + "/../", baseControllerFPath).replace(trailReg, "/");
    const modelRPath = path.relative(controllerPath  + "/../", modelPath).replace(trailReg, "/");
    const repoRPath = path.relative(controllerPath  + "/../", repoPathNoExt).replace(trailReg, "/");

    // -
    let template = fs.readFileSync(templatePath).toString();

    template = template
        .replace( new RegExp("__MODEL_PATH", 'g'), modelRPath)
        .replace(new RegExp("__BASE_CONTROLLER_PATH", 'g'), baseControllerRPath)
        .replace(new RegExp("__MODEL_REPO_PATH", 'g'), repoRPath)
        .replace(new RegExp("__MODEL__", 'g'), modelName);

    fs.mkdirSync(path.dirname(controllerPath), {
        recursive: true
    });

    fs.writeFileSync(controllerPath, template);

    console.log("Generated controller file at " + controllerPath);

    return controllerPath; 
}

async function generatePermissions(GeneratorConfig: any, tableName: string, namespace: string) {
    const modelName = pascalCase(pluralize.singular(tableName));

    const permissionsPath = path.resolve(GeneratorConfig.Permissions, namespace, modelName + ".permissions.ts");
    const templatePath = path.resolve( __dirname, 'templates', 'Permissions.t.ts');    
   

    // -
    let template = fs.readFileSync(templatePath).toString();

    template = template
        .replace(new RegExp("__NMSPACE__", 'g'), namespace)
        .replace(new RegExp("__MODEL__", 'g'), pascalCase(tableName));

    fs.mkdirSync(path.dirname(permissionsPath), {
        recursive: true
    });

    fs.writeFileSync(permissionsPath, template);

    console.log("Generated permissions file at " + permissionsPath);

    return permissionsPath;
}

async function generateRepository(GeneratorConfig: any, tableName: string, namespace: string) {
    const modelName = pascalCase(pluralize.singular(tableName));

    const repoPath = path.resolve(GeneratorConfig.Repositories, namespace, modelName + "Repository.ts");
    const templatePath = path.resolve( __dirname, 'templates', 'Repository.t.ts');    
    const modelPath = path.resolve(GeneratorConfig.Models, namespace, modelName);    
    
    // -
    const trailReg = new RegExp("\\\\", 'g');

    const baseRepoFPath = path.resolve(GeneratorConfig.src, 'core', 'domain', 'BaseRepository');
    const baseRepoRPath = path.relative(repoPath + "/../", baseRepoFPath).replace(trailReg, "/");
    const modelRPath = path.relative(repoPath  + "/../", modelPath).replace(trailReg, "/");
    

    // -
    let template = fs.readFileSync(templatePath).toString();

    template = template
        .replace( new RegExp("__MODEL_PATH", 'g'), modelRPath)
        .replace(new RegExp("__BASE_REPO_PATH", 'g'), baseRepoRPath)
        .replace(new RegExp("__MODEL__", 'g'), modelName);

    fs.mkdirSync(path.dirname(repoPath), {
        recursive: true
    });

    fs.writeFileSync(repoPath, template);

    console.log("Generated repository file at " + repoPath);

    return repoPath;
}

async function generateRoutes(permsPath: string, controllerPath: string,  GeneratorConfig: any, tableName: string, namespace: string) {
    const modelName = pascalCase(pluralize.singular(tableName));
    const trailReg = new RegExp("\\\\", 'g');

    const controllerPathParts = path.parse(controllerPath);
    const controllerPathNoExt = path.resolve(controllerPathParts.dir , controllerPathParts.name);

    const permsPathParts = path.parse(permsPath);
    const permsPathNoExt = path.resolve(permsPathParts.dir , permsPathParts.name);

    const templatePath = path.resolve( __dirname, 'templates', 'CrudRoutes.t.ts');   
    const routesPath = path.resolve(GeneratorConfig.Routes, namespace, modelName + ".Routes.ts");
    const middlewaresPath = path.relative(routesPath + '/../', path.resolve(GeneratorConfig.src, 'core', 'middlewares')).replace(trailReg, "/");
    const permissionsRPath = path.relative(routesPath + '/../', permsPathNoExt).replace(trailReg, "/");
    const controllerRPath = path.relative(routesPath + "/../", controllerPathNoExt).replace(trailReg, "/");
    
    // -
    let template = fs.readFileSync(templatePath).toString();

    template = template
        .replace( new RegExp("__PERMISSIONS_PATH", 'g'), permissionsRPath)
        .replace(new RegExp("__MIDDLEWARES__", 'g'), middlewaresPath)
        .replace(new RegExp("__MODEL__CONTROLLER_PATH", 'g'), controllerRPath)        
        .replace(new RegExp("__NMSPACE_L__",'g'), namespace.toLowerCase())
        .replace(new RegExp("__MODEL_L__", 'g'), modelName.toLowerCase())
        .replace(new RegExp("__MODEL__", 'g'), modelName);
        

    fs.mkdirSync(path.dirname(routesPath), {
        recursive: true
    });

    fs.writeFileSync(routesPath, template);

    console.log("Generated routes file at " + routesPath);

    // Imports into the Main Router File
    const mainRoutesPath = path.resolve(GeneratorConfig.Routes, 'Routes.ts');
    const routesPathParts = path.parse(routesPath);
    const routesPathNoExt = path.resolve(routesPathParts.dir , routesPathParts.name);
    const routesRPath = path.relative(mainRoutesPath + "/../", routesPathNoExt).replace(trailReg, "/");

    // Inserts the Routes to the File
    let routesMainSrc = fs.readFileSync(mainRoutesPath).toString();

    /* Search for IMPORTS POSITION
    const importPosition = routesMainSrc.indexOf('//__E_GENERATOR_APPEND DONT REMOVE');
    if(importPosition > 0) {
        routesMainSrc = routesMainSrc.substring(0, importPosition)
         + "import { setRoutes as " + modelName + "Routes } from './" + routesRPath + "';\r\n"
         + routesMainSrc.substring(importPosition);
    }

    const applyRoutesPosition = routesMainSrc.indexOf('//__E_GENERATOR_APPEND2 DONT REMOVE');
    if(applyRoutesPosition > 0) {
        routesMainSrc = routesMainSrc.substring(0, applyRoutesPosition) + "    " +
         modelName + "Routes(route); // " + modelName + " crud routes \r\n"
         + routesMainSrc.substring(applyRoutesPosition);
    }

    fs.writeFileSync(mainRoutesPath, routesMainSrc);
    
    console.log("Updated main routes file at " + mainRoutesPath);
    */
}

// LOADS ENV
dotenv.config();

async function execute() {
    // LOAD Generator Config
    const GeneratorConfig = require(path.resolve('.generatorcfg'));
    const params = minimist.default(process.argv.slice(2));

    const tableName = params.t;
    const namespace = params.n;
    const schema = params.s;

    console.log(GeneratorConfig);

    // Generates the Model
    await generateModel(GeneratorConfig, tableName, namespace, schema);

    // Generates the Repository
    const repoPath = await generateRepository(GeneratorConfig, tableName, namespace);

    // Generates the Controller
    const controllerPath = await generateController(repoPath, GeneratorConfig, tableName, namespace);

    // Generates the Permissions
    const permissionsPath = await generatePermissions(GeneratorConfig, tableName, namespace);

    // Generates the Routes 
    await generateRoutes(permissionsPath, controllerPath, GeneratorConfig, tableName, namespace);

};

execute();