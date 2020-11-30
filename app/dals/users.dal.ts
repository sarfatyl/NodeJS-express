import {UserModel} from "../models/user.model";

//Singleton
export class UsersDal {

	private static instance: UsersDal;

	private constructor() {
	}

	private _users: UserModel[] = [];

	public static getInstance(): UsersDal {
		if (!UsersDal.instance) {
			UsersDal.instance = new UsersDal();
		}

		return UsersDal.instance;
	}

	getUsers(): UserModel[] {
		return this._users;
	}

	createUser(newUser: UserModel): Promise<UserModel> {
		return new Promise((resolve) => {
			const id = this._users.length;
			newUser.id = id;
			this._users.push(newUser);
			resolve(newUser);
		});
	}

	getUserById(id: number): Promise<UserModel> {
		return new Promise<UserModel>((resolve) => {
			const user = this._users.find((user) => {
				return user.id === id;
			})
			resolve(user);
		});
	}

	updateUser(updateUser: UserModel): Promise<UserModel> {
		return new Promise<UserModel>((resolve) => {
			const user = this._users.find((user) => {
				return user.id === updateUser.id;
			})
			Object.assign(user, updateUser);
			resolve(updateUser);
		});
	}

	async deleteUser(id: number): Promise<string> {
		const sameId = (element) => element.id === id;
		const index = await this._users.findIndex(sameId);
		this._users.splice(index, 1);
		return 'deleted';
	}
}
