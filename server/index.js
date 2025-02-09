import express from "express";
import cors from 'cors';

import generateReview from "./review.js";
const app = express();

const port = 3000;



app.use(express.json());
app.use(cors());

app.post('/api/v1/reviews', async (req, res) => {
  const code = req.body.code;
  console.log("Received code:", code);
  try {
    const review = await generateReview(code);
    return res.status(200).send({ review });
  } catch (error) {
    console.error("Error in /api/v1/reviews:", error);
    return res.status(500).send({ message: error.message });
  }
});

app.listen(port,()=>{
   console.log(`server is listering at${port}`);
})