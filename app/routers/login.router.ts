import {Router} from 'express';
import passport from "passport";
import passportLocal from "passport-local";
import * as jwt from 'jsonwebtoken';

require('../authentication/local.authentication');
require('../authentication/jwt.authentication');

export class LoginRouter {

	router: Router = Router();

	constructor() {
		this.router.use(passport.initialize());

		this.router.post('', passport.authenticate('local', {session: false}), async function (req, res, next) {
			const token = await jwt.sign({
				hello: 'world',
				userId: req.user.id,
				role: req.user.role
			}, 'secret string');
			res.send(`jwt token: ${token}`);
		})
	}

	getRouter(): Router {
		return this.router;
	}

}
