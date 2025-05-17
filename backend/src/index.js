// const express=require('express');
import express from "express";
const app=express();
// const path=require("path");
import path from 'path';


const __dirname=path.resolve();
console.log("mkdffjfjfdj");

console.log(__dirname);


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



app.use(express.static(path.join(__dirname,"/frontend/dist")));

// const filePath = path.resolve(__dirname,"frontend", "dist", "index.html");
// console.log('Serving frontend from: ', filePath);

// app.get('*', (req, res) => {
//     res.sendFile(filePath, (err) => {
//       if (err) {
//         console.error('Error sending index.html:', err);
//         res.status(500).send(err.message);
//       }
//     });
//   });


app.listen(4000,()=>{
    console.log("Server is running");
})