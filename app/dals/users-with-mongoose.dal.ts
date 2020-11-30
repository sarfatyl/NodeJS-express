import {User} from '../entities/user.schema'
import {UserModel} from "../models/user.model";

export class UsersWithMongooseDal {


	async createUser(newUser: UserModel){
		const user = await User.create({

		})
	}


}
