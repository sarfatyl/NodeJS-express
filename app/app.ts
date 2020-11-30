import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import compression = require('compression');
import {ApiRoutes} from './enums/api-routes.enum';
import {ExampleRouter} from './routers/example.router';
import {PingRouter} from './routers/ping.router';
import {UsersRouter} from "./routers/users.router";

class App {

	public app: express.Application = express();
	public mongoUrl: string = '';
	public prefixRoute = '/ms_name/v1';

	constructor() {
		// mongoose.connect('mongodb://localhost:27017/test-db').then(()=>{
		// 	console.log('we are now connected to the db');
		//
		// },(err)=> {
		// 	console.log(`we failed to connect db ${err}` );
		//
		// }
		// )
		// this.app.use(RwsLogger.startLogApiCalls);
		this.config();
		// this.mongoSetup();
		this.setRouters();
		// this.app.use(this.prefixRoute, this.app._router);
		// this.app.use(RwsErrorHandling.errorHandler);
		// this.app.use(RwsLogger.errorLogging);
		// this.app.use(RwsLogger.endLogApiCalls);
	}

	private config(): void {
		this.app.use(compression());
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: false}));
		// serving static files
		this.app.use(express.static('public'));
		this.app.disable('x-powered-by');
	}

	private mongoSetup(): void {
		mongoose.Promise = global.Promise;
		if (process.env.MONGO_DB_CONNECTIONSTRING) {
			console.log('process.env.MONGO_DB_CONNECTIONSTRING', process.env.MONGO_DB_CONNECTIONSTRING);
			this.mongoUrl = process.env.MONGO_DB_CONNECTIONSTRING;
			mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
		}
	}

	private setRouters(): void {
		this.app.use(ApiRoutes.Ping, new PingRouter().getRouter());
		this.app.use(ApiRoutes.Example, new ExampleRouter().getRouter());
		this.app.use(ApiRoutes.Users, new UsersRouter().getRouter());
	}

}

export default new App().app;
