import {UsersService} from "../services/users.service";
import {NextFunction, Request, Response} from 'express-serve-static-core';
import {UserModel} from "../models/user.model";
import {ResponseStatusCodes} from "../enums/response-status-codes.enum";
import {RwsError} from "../utils/rws-error-handling";

export class UsersController {

	constructor(private usersService: UsersService) {
	}

	getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try{
			const users: UserModel[] = await this.usersService.getUsers();
			res.status(ResponseStatusCodes.Ok).send(users);
			next();
		}catch (err) {
			next(err)
		}
	};

	createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			let newUser = req.body;
			if(!newUser) {
				throw new Error('Invalid User')
			}
			newUser = await this.usersService.createUser(newUser);
			res.status(ResponseStatusCodes.Create).send(newUser);
			next();
			next();
		}catch (err) {
			next(err)
		}
	}
	getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id:number = +req.params.id;
			console.log('',id);
			const user: UserModel = await this.usersService.getUserById(id);
			if(user) {
				res.status(ResponseStatusCodes.Ok).send(user);
				next();
			}else
				{
				throw new Error('User not found');
			}
		}catch (e) {
			next(e)
		}

	}


}
