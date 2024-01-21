import User from './model';
import {ObjectId} from 'mongodb'

export class UserService{
     async index(){
        return await User.find();
    }
    
    async show(id:any){
        return await User.find({_id: new ObjectId(id)});
    }
    
    async destroy(id:any)  {
        return await User.findByIdAndDelete(id);
    }
    async save(data:any){
        const newUser= new User(data);
        return await newUser.save();
    }
}