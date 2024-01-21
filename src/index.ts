import express from 'express';
import router from './routes';
import mongoose from 'mongoose';
import dotentv from 'dotenv';
import { UserService } from '../modules/user/service';

const app = express();
dotentv.config();

mongoose.connect(process.env.DB_URL!!);
const port=process.env.PORT || 3000;
const test=new UserService();
test.save({name:'test','email':'test5@qrsss.com','password':'test'}).then(res=>{
    console.log(res);
});
test.save({name:'test3','email':'test6@qrsss.com','password':'test'}).then(res=>{
    console.log(res);
});
app.use(router);

app.listen(port,()=>{
    console.log('started listening');
})