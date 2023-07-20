const mongoose = require('mongoose');

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://localhost:27017/blogApp',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
},


);
module.exports = mongoose;