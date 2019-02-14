const express = require("express");
console.log("what is express ",express,typeof express);   //what is express,  function
const myApp = express();
/*what is myApp,  function(req, res, next) {
    app.handle(req, res, next);
  }, function*/
console.log("what is myApp ",myApp,typeof myApp);  

const bodyParser = require("body-parser");  //  ???

console.log("what is Express.static ",express.static("public"));  // ???
app.use(express.static("public"));           //  ???
app.use(bodyParser.urlencoded({extended:false})); //  ???

app.get('/login',(req,res)=>{
    console.log("req & res",req.query,res);
    var userid =req.query.userid;
    var pwd =req.query.pwd;
    if(userid ==pwd){
        res.send('welcome '+userid);
    }else{
        response.send('Invalid UserId or Password');
    }
})
app.post('/login',(req,res)=>{
    console.log("body is ",req.body);
    var userid= req.body.userid;
    var pwd = req.body.pwd;
    if(userid ==pwd){
        res.send("Welcome "+userid);
    }else{
        response.send('invalid Userid or Password');
    }
})

app.use((req,res,next)=>{       //what about next
       response.send("U type something Wrong ...");
})

myApp.listen(process.env.Port ||2345,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("server start");
    }
    
})