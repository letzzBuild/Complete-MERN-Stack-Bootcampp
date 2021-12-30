const express = require('express');

const app = express();
const PORT = 5000


//display all followers
app.get('/allfollowers', function(req,res){
   //your main logic goes there
   const followers = ["John", "Paul", "George", "Ringo"];
   res.status(200).json({"followers":followers})
})

//display all posts
app.get('/allposts',function(req,res){
 const posts = [{
    "id": 1,
    "likes": 10,
    "comments": ["Nice post", "I like it"],
    "user": "John",
    "image_url" :"https://i.pinimg.com/474x/d2/6e/4f/d26e4f58e35922da69e2e4e31d7a52e7--face-stencils-image-search.jpg"
 },{
    "id": 2,
    "likes": 20,
    "comments": ["Nice post", "I like it"],
    "user": "Paul",
    "image_url" :"https://i.pinimg.com/474x/d2/6e/4f/d26e4f58e35922da69e2e4e31d7a52e7--face-stencils-image-search.jpg"
 }];

 res.status(200).json({"posts":posts})




})

app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
})