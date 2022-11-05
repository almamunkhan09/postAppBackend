import Joi from 'joi'


function validateUser(userObject){
    const schema = Joi.object({
        name: Joi.string().required().trim(),
        password: Joi.string().required().min(8),
        email: Joi.string().required().lowercase().email().trim(),
        address: Joi.string().required()
    })
    return schema.validate(userObject)
}


export default validateUser;