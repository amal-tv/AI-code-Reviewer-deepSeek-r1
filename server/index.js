import express from "express";
import cors from 'cors';
import * as dotenv from "dotenv";

import generateReview from "./review.js";
const app = express();

const port = 3000;
dotenv.config();



app.use(express.json());
app.use(cors());

app.post('/api/v1/reviews',async(req,res)=>{
  const code = req.body.code;
  // console.log("here is the cde" + code);
    try {
       const review =  await generateReview(code);

       return res.status(200).send({
         review
       })
    } catch (error) {
          return res.status(500).send({message : "something went wrong"})
    }

});

app.listen(port,()=>{
   console.log(`server is listering at${port}`);
})