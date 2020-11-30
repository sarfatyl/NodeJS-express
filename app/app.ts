import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import {ApiRoutes} from './enums/api-routes.enum';
import {ExampleRouter} from './routers/example.router';
import {PingRouter} from './routers/ping.router';
import {UsersRouter} from "./routers/users.router";
import {LoginRouter} from "./routers/login.router";

class App {

	public app: express.Application = express();
	public mongoUrl: string = 'mongodb://localhost:27017/local';

	constructor() {
		this.config();
		// this.connectToDb();
		this.setRouters();
	}

	private config(): void {
		//middleware creator
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: false}));
		// serving static files
		this.app.use(express.static('public'));
	}

	private setRouters(): void {
		this.app.use(ApiRoutes.Ping, new PingRouter().getRouter());
		this.app.use(ApiRoutes.Example, new ExampleRouter().getRouter());
		this.app.use(ApiRoutes.Users, new UsersRouter().getRouter());
		this.app.use(ApiRoutes.Login, new LoginRouter().getRouter());
	}


	private connectToDb() {
		mongoose.connect(this.mongoUrl).then(() => {
				console.log('we are now connected to the db');
			}, (err) => {
				console.log(`we failed to connect db ${err}`);
			}
		)
	}
}

export default new App().app;
