import { createUser } from '../controllers/CUser.js'


const prefix = "ic";

export default [
    {
        method: "POST",
        url: `/${prefix}/createUser`,
        handler: createUser,
    },
];