import User from '../models/userModel.js';

import bcrypt from "bcrypt";


// const someOtherPlaintextPassword = 'not_bacon';



const checkUser = async (request, response) => {
    try {
        const { email,password } = request.body;
        const user = await User.findOne({email: email})
        
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match){
                return response.status(400).json('Log in successful');
            }
            return response.status(400).json('Password does not  match');
            
        }

        return response.status(400).json('User does not exist')
        
    }
    catch (error) {
        return response.status(500).json(error.message)
    }



}

export default checkUser




// async function check(user, password) {
//     //... fetch user from a db etc.

//     const match = await bcrypt.compare(password, user.passwordHash);

//     if(match) {
//         //login
//     }

//     //...
// }