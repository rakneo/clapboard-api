const MovieController = require('./MovieController')
const UserController = require('./UserController')
const ReviewController = require('./ReviewContoller')

module.exports = {
    movie:MovieController,
    user:UserController,
    review:ReviewController
}