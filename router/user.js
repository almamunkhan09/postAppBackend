import {response, Router} from 'express';
import createUser from '../controller/userController.js'



const user = Router();

user.route('/').get((request,response)=>{
    response.status(200).json('Hello from the User Page')
})

user.route('/').post(createUser)

export default user;
