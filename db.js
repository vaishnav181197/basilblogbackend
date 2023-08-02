const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blogApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
// // connection string
// mongoose.connect("mongodb://localhost:27017/BLOGAPP",{
// useNewUrlparser:true
// })
// definig model
const Post=mongoose.model('blog',{
   
    title:String,
    content:String,
    username:String,
    date:String,
    cmnt:[]
  
  
})
const Website = mongoose.model("Website", {
  user_id: String,
  email: String,
  password: String,
 
});



module.exports={
    Post,
    Website
}