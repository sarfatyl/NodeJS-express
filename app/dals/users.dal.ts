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

	async getUsers(): Promise<UserModel[]> {
		return this._users;
	}

	async createUser(newUser: UserModel): Promise<UserModel> {
		const id = this._users.length;
		newUser.id = id;
		this._users.push(newUser);
		return newUser;
	}

	async getUserById(id: number): Promise<UserModel> {
		const user = this._users.find((user) => {
			return user.id === id;
		})
		return user;
	}

	async updateUser(updateUser: UserModel): Promise<UserModel> {
		const user = this._users.find((user) => {
			return user.id === updateUser.id;
		})
		Object.assign(user, updateUser);
		return updateUser;
	}

	async deleteUser(id: number): Promise<string> {
		const sameId = (element) => element.id === id;
		const index = await this._users.findIndex(sameId);
		this._users.splice(index, 1);
		return 'deleted';
	}
}
