import {response, Router} from 'express';
import checkUser from '../controller/checkUser.js'



const login = Router();

login.route('/').get((request,response)=>{
    response.status(200).json('Hello from the login Page')
})

login.route('/').post(checkUser)

export default login;
