const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const UserModel = mongoose.model("users",userSchema);
module.exports = UserModel;







// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: {type: String,required:true,unique:true},
//     email:{type:String,required:true,unique:true},
//     passwor:{type:String,required:true,unique:true},
// })


// const UserModel = mongoose.model('User',userSchema);

// module.exports = UserModel;