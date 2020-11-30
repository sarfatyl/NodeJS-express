import {format, createLogger, transports} from 'winston';
import {Enviroment} from '../enums/enviroment.enum';
import {NextFunction, Request, Response} from 'express-serve-static-core';
import {RwsError} from './rws-error-handling';
import {ResponseTypes} from '../enums/response-types.enum';

const stackTrace = require('stack-trace');

export class RwsLogger {
	private static logger = createLogger({
		level: process.env.NODE_ENV === Enviroment.Prod || process.env.NODE_ENV === Enviroment.Production ? 'info' : 'debug',
		format: format.combine(
			format.colorize({all: true}),
			format.simple(),
			format.timestamp({format: 'DD-MM-YYYY HH:mm:ss.SSS'}),
			format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`),
		),
		transports: [
			new transports.Console({
				silent: process.argv.indexOf('silent') >= 0,
			})
		]
	});

	static logError(message) {
		RwsLogger.logger.error(message);
	}

	static logWarn(message) {
		RwsLogger.logger.warn(message);
	}

	static logInfo(message) {
		RwsLogger.logger.info(message);
	}

	static logVerbose(message) {
		RwsLogger.logger.verbose(message);
	}

	static logDebug(message) {
		RwsLogger.logger.debug(message);
	}

	static logSilly(message) {
		RwsLogger.logger.silly(message);
	}

	static startLogApiCalls(req, res, next) {
		if (process.argv.indexOf('verbose') >= 0) {
			RwsLogger.logVerbose(`Start | ${req.method} | ${req.originalUrl}`);
		}
		next();
	}

	static endLogApiCalls(req, res, next) {
		if (process.argv.indexOf('verbose') >= 0) {
			RwsLogger.logVerbose(`End | ${req.method} | ${req.originalUrl} | ${res.statusCode}`);
		}
		next();
	}

	static errorLogging(error: RwsError, req: Request, res: Response, next: NextFunction) {
		let responseType: ResponseTypes;
		switch (true) {
		case (error.error && error.error.statusCode >= 300 && error.error.statusCode < 400):
			responseType = ResponseTypes.Redirection;
			break;
		case (error.error && error.error.statusCode >= 400 && error.error.statusCode < 500):
			responseType = ResponseTypes.ClientError;
			break;
		case (error.error && error.error.statusCode >= 500):
			responseType = ResponseTypes.ServerError;
			break;
		default:
			responseType = ResponseTypes.ServerError;
			break;
		}
		if (error.isRwsError) {
			const trace = stackTrace.parse(error);
			const data = trace[0];
			RwsLogger.logError(`${responseType} | ${req.method} | ${req.originalUrl} | ${error.error.name} | ${data.getFileName()} ${data.getLineNumber()}:${data.getColumnNumber()}`);
		} else {
			RwsLogger.logError(`${responseType} | ${req.method} | ${req.originalUrl} | ${error.stack}`);
		}
		next();
	}

}
