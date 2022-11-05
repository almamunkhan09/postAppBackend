import User from '../models/userModel.js';
import validateUser from '../validations/userValidation.js';
import bcrypt from "bcrypt";
const saltRounds = 10;

// const someOtherPlaintextPassword = 'not_bacon';



const createUser = async (request, response) => {
    try {
        
        const { error } = validateUser(request.body);
        if (error) {
            return response.status(400).json(error.details[0].message);
        }
        const user = new User(request.body);
        const salt = bcrypt.genSaltSync(saltRounds);
        user.password = bcrypt.hashSync(user.password, salt);
        const result = await user.save();
        return response.status(200).json(`User creation successful`);
    }
    catch (error) {
        return response.status(500).json(error.message)
    }



}

export default createUser