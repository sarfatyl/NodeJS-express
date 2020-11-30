import {ResponseStatusCodes} from '../enums/response-status-codes.enum';
import {IRwsError} from '../interfaces/rws-error.interface';

export const InvalidId: IRwsError = {
	statusCode: ResponseStatusCodes.BadRequest,
	name: 'InvalidId',
	message: 'Invalid id.'
};

export const InternalServerError: IRwsError = {
	statusCode: ResponseStatusCodes.InternalServerError,
	name: 'InternalServerError',
	message: 'Internal server error.'
};
