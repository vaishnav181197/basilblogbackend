const mongoose =require('./db.js');

// const db = require("./Models/Post.js");
const db = require("./db.js");
 // Replace with the correct path to your model file



 const register = (usid,email,pswd) => {

  return db.Website.findOne({
    user_id:usid,

  }).then((acc) => {
    console.log(acc);
    if (acc) {
      return {
        status: false,
        message: "account already exist!...please login!",
        statusCode: 404,
      };
    } else {
      let Website = new db.Website({
        user_id:usid,
        email:email,
        password:pswd
      });
      console.log(Website)
      Website.save();
      return {
        status: true,
        message: "Registration completed",
        statusCode: 201,
      };
    }
  });
};



const login = (usid, pswd) => {
  return db.Website.findOne({
    user_id:usid,
    password: pswd,
  }).then((res) => {
    console.log(res +"from login in ds")
    if (res) {
      console.log(res)
      currentUser = res.email;
      currentUserId = usid;
      token = jwt.sign(
        //acno of current user
        { currentUserId :usid
         },
        "secretsuperkey1234"
      );
      return {
        status: true,
        message: "Login successfull",
        statusCode: 200,
        currentUser,
        currentUserId,
        token,
      };
    } else {
      return {
        status: true,
        message: "invalid password or account number",
        statusCode: 400,
      };
    }
  });
};


const addpost = ( title,content, username) => {
  return db.Post.find({ 
  }).then((acc) => {
         
  }).then((acc) => {
      console.log(acc);
      if (acc) {
        return {
          status: false,
          message: "Account Already exists!!......please login",
          statusCode: 404,
        };
      } else {
        let accr = new db.Post({
        
        
    title,
    content,
    username
          
        });
        accr.save();
        return {
          status: true,
          message: "Post added!!",
          statusCode: 201,
        };
      }
    });
  };
  
  // get all post
  const allpost = () => {
    return db.Post.find().then(
      (result) => {
        console.log(result);
        if (result) {
          return {
            statusCode: 200,
            blog: result
          };
        } else {
          return {
            statusCode: 404,
            message: 'NO data Available'
          };
        }
      }
    );
  };
    
  module.exports = {
   register,
   login,
   addpost,
   allpost,
  };