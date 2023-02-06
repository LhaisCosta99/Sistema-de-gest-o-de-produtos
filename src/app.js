import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql2";

dotenv.config()

const app = express()
const port = process.env.PORT

app.listen(port, ()=>{
    console.log("http://localhost:3000")
})