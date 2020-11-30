import {UserModel} from "../models/user.model";
import {UsersDal} from "../dals/users.dal";
import {UsersMongooseDal} from "../dals/users-mongoose.dal";

export class UsersService {

	constructor(private usersDal: UsersDal, private usersDalDb: UsersMongooseDal) {
	}

	getUsers(): Promise<UserModel[]> {
		return this.usersDal.getUsers();
	}

	createUser(newUser: UserModel) {
		return this.usersDal.createUser(newUser);
	}

	getUserById(id: number): Promise<UserModel> {
		return this.usersDal.getUserById(id);
	}

	updateUser(updateUser: UserModel): Promise<UserModel> {
		return this.usersDal.updateUser(updateUser);
	}

	deleteUser(id: number): Promise<string> {
		return this.usersDal.deleteUser(id);
	}

	async getUsersDB():Promise<UserModel[]> {
		return this.usersDalDb.getUsersDB();
	}

	async createUserDb(newUser: UserModel):Promise<UserModel> {
		return this.usersDalDb.createUser(newUser);

	}

	async getUserByIdDb(id):Promise<UserModel> {
		return this.usersDalDb.getUserByIdDb(id);

	}

	async updateUserDb(updateUser: UserModel):Promise<UserModel>  {
		return this.usersDalDb.updateUserDb(updateUser);
	}

	async deleteUserDb(id: string) {
		return this.usersDalDb.deleteUserDb(id);
	}
}
