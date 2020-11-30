import {Router} from "express";
import {UsersController} from "../controllers/users.controller";
import {UsersService} from "../services/users.service";
import {UsersDal} from "../dals/users.dal";
import passport from "passport";
import * as jwt from 'jsonwebtoken';
require('../authentication/local.authentication');
require('../authentication/jwt.authentication');
const authorizedRoles = require('../authentication/role.authorization');


export class UsersRouter {
	router: Router = Router();
	usersDal: UsersDal = new UsersDal();
	usersService: UsersService = new UsersService(this.usersDal);
	usersController:UsersController = new UsersController(this.usersService);


	constructor() {
		//all route that starts in api
		this.router.use('/',passport.authenticate('jwt',{session:false}));
		this.router.route('')
			.get(this.usersController.getUsers)
			.post(this.usersController.createUser)
		this.router.route('/:id(\\d+)')
			.all(this.usersController.userExist)
			.get(this.usersController.getUserById)
			.put(this.usersController.updateUser)
			.delete(authorizedRoles(['admin']),this.usersController.deleteUser)
	}


	getRouter(): Router {
		return this.router;
	}
}
