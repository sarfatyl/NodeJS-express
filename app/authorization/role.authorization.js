module.exports = function authorizedRoles(roles) {
    return function(req, res, next) {
        const userRole = req.user.role;
        const foundRole = roles.find(function(roleFromArray) {
            return roleFromArray === userRole
        });
        if (foundRole) {
            next();
        } else {
            res.status(403).json({
                error: 'user is not allowed'
            })
        }
    }
}
