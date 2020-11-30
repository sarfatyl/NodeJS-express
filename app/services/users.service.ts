import {UserModel} from "../models/user.model";
import {UsersDal} from "../dals/users.dal";

export class UsersService {
	constructor(private usersDal: UsersDal) {
	}

	async getUsers(): Promise<UserModel[]> {
		return this.usersDal.getUsers();
	}

	async createUser(newUser: UserModel) {
		return this.usersDal.createUser(newUser);
	}

	getUserById(id: number): Promise<UserModel> {
		return this.usersDal.getUserById(id);
	}

	async updateUser(updateUser: any):Promise<UserModel> {
		return this.usersDal.updateUser(updateUser);
	}

	async deleteUser(id: number) {
		return this.usersDal.deleteUser(id);
	}
}
