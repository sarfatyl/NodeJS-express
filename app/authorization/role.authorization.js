module.exports = function authorizedRoles(roles) {
    return function(req, res, next) {
        console.log('req.user',req.user);

        const userRole = req.user.role;
        console.log('userRole',userRole);

        console.log('userRole',userRole);
        const foundRole = roles.find(function(roleFromArray) {
            return roleFromArray === userRole
        });
        console.log('foundRole',foundRole);
        if (foundRole) {
            next();
        } else {
            res.status(403).json({
                error: 'user is not allowed'
            })
        }
    }
}
