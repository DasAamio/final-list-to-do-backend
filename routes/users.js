const UserController = require('../Controller/userController')

var router = require('express-promise-router')();

router.route('/createuser')
    .post(UserController.createUser)
router.route('/login')
    .post(UserController.login)

module.exports = router