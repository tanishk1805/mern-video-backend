import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app=express();
dotenv.config();
mongoose
.connect(process.env.MONGO)
.then(
()=>{app.listen(5000,()=>{console.log("server running")})})
.catch((err)=>{console.log(err);
});
