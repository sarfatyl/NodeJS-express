import {NextFunction, Request, Response} from 'express-serve-static-core';
import * as Errors from '../consts/errors.const';
import {IRwsError} from '../interfaces/rws-error.interface';

export class RwsError extends Error {
	error: IRwsError;
	data: any;
	isRwsError: boolean = true;

	constructor(error: IRwsError, data?: any) {
		super(error.message);
		this.error = error;
		this.data = data;
	}
}

export class RwsErrorHandling {

	static errorHandler(error: RwsError, req: Request, res: Response, next: NextFunction) {
		if (error.isRwsError) {
			res.status(error.error.statusCode).send(error.error);
		} else {
			res.status(Errors.InternalServerError.statusCode).send(Errors.InternalServerError);
		}
		next(error);
	}

}
