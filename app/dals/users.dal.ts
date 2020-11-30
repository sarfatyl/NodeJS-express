import {UserModel} from "../models/user.model";

export class UsersDal {

	private _users:UserModel[] =[{
		firstName:'Linoy',
		lastName:'Sarfaty',
		id:0,
		role:'admin'
	}];


	getUsers():UserModel[] {
		return this._users;
	}

	createUser(newUser: UserModel):Promise<UserModel> {
		return new Promise((resolve)=>{
			const id = this._users.length;
			newUser.id = id;
			this._users.push(newUser);
			resolve(newUser);
		});
	}

	getUserById(id: number):Promise<UserModel> {
		return new Promise<UserModel>((resolve) => {
			const user = this._users.find((user)=>{
				return user.id === id;
			})
			resolve(user);
		});
	}


}
