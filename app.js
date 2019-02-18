const express = require("express");
console.log("what is express ",express,typeof express);   //what is express,  function
const myApp = express();
/*what is myApp,  function(req, res, next) {
    app.handle(req, res, next);
  }, function*/
console.log("what is myApp ",myApp,typeof myApp);  

const bodyParser = require("body-parser");  // it is used to parse the body similar as jason.stringfy

console.log("what is Express.static ",express.static("public"));  // take a root directory
app.use(express.static("public"));           //  app.use as middleware put inside the middleware 
app.use(bodyParser.urlencoded({extended:false})); // extended false when single value or array and extended true when pass anything
app.use('/',require("./routes/user"));
app.use('/products',require());

app.use((req,res,next)=>{       //what about next
       res.send("U type something Wrong ...");
})

myApp.listen(process.env.PORT ||2345,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("server start");
    }
})