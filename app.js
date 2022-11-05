//importing packages
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import user from './router/user.js'
import login from './router/login.js';


const app = express ();
app.use(express.json())


//Environment Configuration 
dotenv.config();
const MONGO_URL = process.env.MONGO_URL ;
const PORT = process.env.PORT || 3100;
// Environment Configuration done 


// Connection to Mongodb
mongoose.connect(`${MONGO_URL}/user`,()=> {console.log('mongo is connected')},err => console.log(err));
// Connection Done 


//Listen to Port 
app.listen(PORT,()=>{
    console.log(`App is Listening at Port ${PORT}`);
})
//Listen to Port
app.use('/user',user)
app.use(express.json())

app.use('/login',login)
app.get('*',(request,response)=>{

    response.status(200).json('Not a valid Path');

})