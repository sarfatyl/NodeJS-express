import {Router} from 'express';
import {ExampleController} from '../controllers/example.controller';
import {ApiRoutes} from '../enums/api-routes.enum';
import {ExampleDal} from '../dals/example.dal';
import {ExampleService} from '../services/example.service';
import { Console } from 'winston/lib/winston/transports';

export class ExampleRouter {

	router: Router = Router();
	exampleDal: ExampleDal = new ExampleDal();
	exampleService: ExampleService = new ExampleService(this.exampleDal);
	exampleController: ExampleController = new ExampleController(
		this.exampleDal,
		this.exampleService
	);

	constructor() {
		// this.router.get(ApiRoutes.GetExample, this.exampleController.getExample);
		this.router.get(ApiRoutes.getClinvarInfoExample, this.exampleController.getClinvarInfoExample);
		this.router.get(ApiRoutes.getEvidenceInfoExample, this.exampleController.getEvidenceInfoExample);
		this.router.post(ApiRoutes.uploadFile, this.exampleController.uploadFile);


	}

	getRouter(): Router {
		return this.router;
	}

}
