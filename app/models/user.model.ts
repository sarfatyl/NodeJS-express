export interface UserModel {
	_id?: string;
	id?:number,
	firstName: string,
	lastName: string,
	role:string,
	permissionName?: {
		type: string,
	},
}
