import {UsersService} from "../services/users.service";
import {NextFunction, Request, Response} from 'express-serve-static-core';
import {UserModel} from "../models/user.model";
import {ResponseStatusCodes} from "../enums/response-status-codes.enum";
const bcrypt = require('bcrypt');

export class UsersController {


	constructor(private usersService: UsersService) {
	}

	getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const users: UserModel[] = await this.usersService.getUsers();
			res.status(ResponseStatusCodes.Ok).json(users);
			next();
		} catch (err) {
			next(err)
		}
	};

	createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			let newUser = req.body;
			if (!newUser) {
				throw new Error('Invalid User')
			}
			const encryptedPassword = await bcrypt.hash(req.body.password, 10)
			newUser.password = encryptedPassword;
			newUser = await this.usersService.createUser(newUser);
			res.status(ResponseStatusCodes.Create).json(newUser);
			next();
		} catch (err) {
			next(err)
		}
	}

	getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			const user: UserModel = await this.usersService.getUserById(id);
			res.status(ResponseStatusCodes.Ok).json(user);
			next();
		} catch (e) {
			next(e)
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
			next(e)
		}

	}

	deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			await this.usersService.deleteUser(id);
			res.status(ResponseStatusCodes.Delete)
			next();
		} catch (e) {
			next(e)
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

	getUsersDB = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const users: UserModel[] = await this.usersService.getUsersDB();
			res.status(ResponseStatusCodes.Ok).json(users);
			next();
		} catch (err) {
			next(err)
		}
	};

	createUserDB = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			let newUser: UserModel = req.body;
			if (!newUser) {
				throw new Error('Invalid User')
			}
			const encryptedPassword = await bcrypt.hash(req.body.password, 10)
			newUser.password = encryptedPassword;
			newUser = await this.usersService.createUserDb(newUser);
			res.status(ResponseStatusCodes.Create).json(newUser);
			next();
		} catch (err) {
			next(err)
		}
	};

	userExistDB = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const user:UserModel = await this.usersService.getUserByIdDb(req.params.id);
			if (user) {
				next();
			} else {
				res.status(400).send('User not found')
			}
		}catch (e) {
			res.status(400).send('User not found')
		}


	}

	getUserByIdDB = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id = req.params.id;
			const user: UserModel = await this.usersService.getUserByIdDb(id);
			res.status(ResponseStatusCodes.Ok).json(user);
			next();
		} catch (e) {
			next(e)
		}

	}

	updateUserDB = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id = req.params.id;
			let updateUser: UserModel = req.body;
			updateUser = await this.usersService.updateUserDb(updateUser);
			res.status(ResponseStatusCodes.Create).json(updateUser);
			next();
		} catch (e) {
			next(e)
		}

	}

	deleteUserDB = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: string = req.params.id;
			const mess = await this.usersService.deleteUserDb(id);
			res.status(ResponseStatusCodes.Ok).send(mess)
			next();
		} catch (e) {
			next(e)
		}

	}

	//default error handler
	errorMiddleware = async (error, req: Request, res: Response, next: NextFunction): Promise<void> => {
		next(error);
	}

}
