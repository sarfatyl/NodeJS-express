import {UserModel} from "../models/user.model";
import {User} from "../entities/user.schema";


export class UsersMongooseDal {
	private static instance: UsersMongooseDal;

	private constructor() {
	}

	public static getInstance(): UsersMongooseDal {
		if (!UsersMongooseDal.instance) {
			UsersMongooseDal.instance = new UsersMongooseDal();
		}
		return UsersMongooseDal.instance;
	}

	async createUser(newUser: UserModel): Promise<UserModel> {
		const user = new User({firstName: newUser.firstName, lastName: newUser.lastName, role:newUser.role});
		return user.save()
	}

	async getUsersDB() {
		const users = await User.find();
		return users;
	}

	getUserByIdDb(id: string):Promise<UserModel> {
		return User.findById(id);
	}

	updateUserDb(updateUser: UserModel) {
		return User.updateOne({_id: updateUser._id},updateUser, {upsert: true});
	}

	deleteUserDb(id: string) {
		return User.remove({_id:id});
	}
}
