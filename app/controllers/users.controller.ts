import {UsersService} from "../services/users.service";
import {NextFunction, Request, Response} from 'express-serve-static-core';
import {UserModel} from "../models/user.model";
import {ResponseStatusCodes} from "../enums/response-status-codes.enum";

export class UsersController {


	constructor(private usersService: UsersService) {
	}

	getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const users: UserModel[] = await this.usersService.getUsers();
			res.status(ResponseStatusCodes.Ok).json(users);
			next();
		} catch (err) {
			res.send(err)
		}
	};

	createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			let newUser = req.body;
			if (!newUser) {
				throw new Error('Invalid User')
			}
			newUser = await this.usersService.createUser(newUser);
			res.status(ResponseStatusCodes.Create).json(newUser);
			next();
		} catch (err) {
			res.send(err)
		}
	}

	getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			const user: UserModel = await this.usersService.getUserById(id);
			res.status(ResponseStatusCodes.Ok).json(user);
			next();
		} catch (e) {
			res.send(e)
		}

	}

	updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			let updateUser: UserModel = req.body;
			if (!updateUser || id !== updateUser.id) {
				throw new Error('Invalid User')
			}
			updateUser = await this.usersService.updateUser(updateUser);
			res.status(ResponseStatusCodes.Create).json(updateUser);
			next();
		} catch (e) {
			res.send(e)
		}

	}

	deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			const mess = await this.usersService.deleteUser(id);
			res.status(ResponseStatusCodes.Delete).send(mess);
			next();
		} catch (e) {
			res.send(e)
		}

	}

	userExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const user = await this.usersService.getUserById(+req.params.id);
		if (user) {
			next();
		} else {
			res.status(400).send('User not found')
		}

	}

	//default error handler
	errorMiddleware = async (error, req: Request, res: Response, next: NextFunction): Promise<void> => {
		next(error);
	}

}
