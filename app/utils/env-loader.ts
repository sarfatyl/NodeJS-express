import * as dotenv from 'dotenv';
import {resolve} from 'path';

dotenv.config({path: resolve(loadEnv())});
dotenv.load();

function loadEnv(): string {
	let path;
	switch (process.env.NODE_ENV) {
	case 'localhost':
		path = './environments/localhost.env';
		break;
	case 'dev':
	case 'development':
		path = './environments/dev.env';
		break;
	case 'test':
		path = './environments/test.env';
		break;
	case 'prod':
	default:
		path = './environments/.env';
		break;
	}
	return path;
}
