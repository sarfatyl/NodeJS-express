import {UserModel} from "../models/user.model";

export class UsersDal {

	private _users: UserModel[] = [{
		firstName: 'Linoy',
		lastName: 'Sarfaty',
		id: 0,
		role: 'admin'
	}];


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

	deleteUser(id: number) {
		return new Promise<string>((resolve) => {
			const isIndex = (element) => element.id === id;
			const index = this._users.findIndex(isIndex);
			if (index) {
				this._users.splice(index, 1);
				resolve('deleted');
			}
		});
	}
}
