import {Schema, model} from "mongoose";
import * as mongoose from 'mongoose';

// Schema user - how user object look like

export const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	permissionName: {
		type: String,
	},
})
export let User;
try {
	User = mongoose.model('User')
} catch (error) {
	User = mongoose.model('User', UserSchema);
}
