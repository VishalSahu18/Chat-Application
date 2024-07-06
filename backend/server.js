// const express = require('express');
// const dotenv = require('dotenv');
import express from "express";// for using the import we have to add "type":"module" in package.json file
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js'
import MessageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'


import connectToMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json());//to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",MessageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res)=>{
//      root route http://localhost:5000/
//     res.send("Hello World!!!");
// })


app.listen(PORT,() => {

    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});







