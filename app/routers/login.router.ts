import {Router} from 'express';
import passport from "passport";
import * as jwt from 'jsonwebtoken';

require('../authentication-Strategies/local.authentication');
require('../authentication-Strategies/jwt.authentication');

export class LoginRouter {

	router: Router = Router();

	constructor() {
		this.router.use(passport.initialize());

		// passport.authenticate('local', {session: false}) is middleware creator pattern and expand req with user
		this.router.post('', passport.authenticate('local', {session: false}), async (req: any, res, next) => {
			const token = await jwt.sign({
				hello: 'world',
				userId: req.user.id,
				role: req.user.role
			}, 'secret string');
			res.cookie('token', token, {
				path: '/users',
				httpOnly: true, // protected js runtime by document.cookie
				secure: true, // must https
				expires: new Date(Date.now() + 900000)
			});
			res.send(`jwt token: ${token}`);
		})
	}

	getRouter(): Router {
		return this.router;
	}

}
