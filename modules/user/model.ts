import mongoose, { Schema } from "mongoose";
import {hashSync,compareSync} from "bcrypt-ts";


const userSchema=new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (v:any) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            }
        }
    },
    password:{
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        required: false,
        default : false
    }
});
userSchema.pre('save',function(next){
    var user=this;
    if(!user.isModified('password')) return next();
    const newPass = hashSync(user.password,10);
    user.password=newPass;
    return next();
})

userSchema.methods.comparePassword = function(test:string,cb:any){
    return compareSync(test,this.password);
}

const UserModel= mongoose.model('User',userSchema);

export default UserModel;