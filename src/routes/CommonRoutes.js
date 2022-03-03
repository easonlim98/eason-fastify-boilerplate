//import { createUser } from '../controllers/CommonController.js'
///CommonJs
const UserController = require('../controllers/CommonController.js');

const prefix = "ic";

const routes = [
    {
        method: 'POST',
        url: `/createUser`,
        handler: UserController.createUser,
    },
];

module.exports = routes