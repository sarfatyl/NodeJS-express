export interface UserModel {
	id?:number,
	firstName: string,
	lastName: string,
	role?:string,
	permissionName?: {
		type: string,
	},
}