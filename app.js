const express =require('express');

const bodyParser=require('body-parser');

const cors =require ('cors');

const mongoose =require('./db.js');

const app =express();
const dataservice = require("./data.service.js");

app.use(bodyParser.json());


app.use(cors({
  origin:"http://localhost:4200"
 }))

 

//register
app.post('/register',(req,res)=>{
    const result = dataservice.register(req.body.usid,req.body.email,req.body.pswd)
    console.log(req.body.usid +"from reg api")
    
    result.then(resobj=>{
        res.status(resobj.statusCode).send(resobj)
    }) 
})

//login...............................................
app.post('/login',(req,res)=>{
    const result = dataservice.login(req.body.usid,req.body.pswd)
    console.log('log hit')
     // res.status(result.statusCode).json(result)
     result.then(resobj=>{
        res.status(resobj.statusCode).send(resobj);
        
    });
});

app.post("/addpost", (req, res) => {
    const result = dataservice.addpost(
 
      req.body.title,
      req.body.content,
      req.body.username,
      req.body.date
      
    );
    console.log(req.body.title)
    
    result.then((resobj) => {
      res.status(resobj.statusCode).send(resobj);
    });
  });

  app.get("/getpost",(req,res)=>{
    dataservice.allpost().then(
      (result)=>{
        console.log(result)
        res.status(result.statusCode).send(result)
      }
    )
  })
  

  app.post("/getmypost",(req,res)=>{
    dataservice.mypost(req.body.me).then(
      (result)=>{
        console.log(result)
        res.status(result.statusCode).send(result)
      }
    )
  })
  app.post("/rmblog",(req,res)=>{
    dataservice.removenlog(req.body._id).then(
      (result)=>{
        console.log(result)
        res.status(result.statusCode).send(result)
      }
    )
  })
  app.post("/addcmnt",(req,res)=>{
    dataservice.addc(req.body.cmnt,req.body.user,req.body._id).then(
      (result)=>{
        console.log(result)
        res.status(result.statusCode).send(result)
      }
    )
  })
  



app.listen(3000,()=>{

    console.log('server is started on port 3000');

    
})

  