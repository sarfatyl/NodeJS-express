export interface UserModel {
	_id?: string;
	id?:number,
	email?:string,
	password?: string,
	firstName: string,
	lastName: string,
	role:string,
	permissionName?: {
		type: string,
	},
}
