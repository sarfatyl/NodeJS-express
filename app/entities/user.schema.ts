import {Schema, model} from "mongoose";

// Schema user - how user object look like

export const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	permissionName: {
		type: String,
	},
})
