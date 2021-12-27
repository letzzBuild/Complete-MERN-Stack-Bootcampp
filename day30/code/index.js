//import express
const express  = require('express');
//create an app object
const app = express();

const PORT = 5000;

//start the server at some port
//development

//creating a endpoint
app.get('/hello',function(req,res){
   res.send("Hello world")
});

app.get('/',function(req,res){
    res.send('<h1>Hello from Letzzbuild . My first API</h1>')
})

app.listen(PORT,()=>{
    console.log(`Server is listening at PORT ${PORT}`);
});