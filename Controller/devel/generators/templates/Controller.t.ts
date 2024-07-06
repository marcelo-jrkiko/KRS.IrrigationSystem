import { Request, Response } from 'express';
import { __MODEL__ } from '__MODEL_PATH';
import { ModelController } from '__BASE_CONTROLLER_PATH';
import { __MODEL__Repository } from '__MODEL_REPO_PATH';

// Exports the Controller
export class __MODEL__Controller extends ModelController<__MODEL__Repository> {
    constructor() {
        super();
        this.MyRepository = new __MODEL__Repository();
    }
}
