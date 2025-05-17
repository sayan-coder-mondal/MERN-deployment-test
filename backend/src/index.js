const express=require('express');
const app=express();


const data = [
    { name: "Ronaldo", profession: "Footballer" },
    { name: "Virat Kohli", profession: "Cricketer" },
    { name: "Elon Musk", profession: "Entrepreneur" },
    { name: "A. R. Rahman", profession: "Music Composer" },
    { name: "Emma Watson", profession: "Actor" },
    { name: "Sundar Pichai", profession: "CEO" },
    { name: "Serena Williams", profession: "Tennis Player" },
    { name: "Stephen Hawking", profession: "Physicist" },
    { name: "Sachin Tendulkar", profession: "Cricketer" },
    { name: "Lionel Messi", profession: "Footballer" },
    { name: "Kalpana Chawla", profession: "Astronaut" },
    { name: "Amitabh Bachchan", profession: "Actor" },
    { name: "Mary Kom", profession: "Boxer" },
    { name: "Neeraj Chopra", profession: "Javelin Thrower" },
    { name: "Greta Thunberg", profession: "Activist" }
  ];

app.get("/api/data",async(req,res)=>{
    try {
        res.status(200).json({success:true,data});
    } catch (error) {
        res.send(error);
    }
})


app.listen(4000,()=>{
    console.log("Server is running");
})