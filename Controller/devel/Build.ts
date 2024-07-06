
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as child_process from 'child_process';

dotenv.config();

console.log("StudioCuboWeb - JSBackend API");
console.log("Builder");

const packageFile : any = fs.readFileSync('package.json');
const packageDetails = JSON.parse(packageFile);

const repository = process.env.DOCKER_REPOSITORY;
const dockerTag = repository + ":" + packageDetails.version;

console.log('Building ' + dockerTag + ' ... ');
child_process.execSync('docker build -t ' + dockerTag + ' . ');

console.log('Pushing ... ');

child_process.execSync('docker push ' + dockerTag + ' . ');