import { ApiNotAcceptableError } from "./ApiNotAcceptableError";

export class DuplicateUserError extends ApiNotAcceptableError {
    constructor() {
        super("The user already exists in the base");
    }
}