const express = require("express");
const connection = require("./Config/db");

require("dotenv").config()
const cors=require("cors");

const recipeRouter = require("./Routes/RecipeRoute")
const {authRouter} = require("./Routes/UserAuthRoute")
const userRoute = require("./Routes/user.Route")
const app = express();
app.use(cors({
  origin:"*",
}))
app.use(express.json());

app.use("/recipe",recipeRouter)
app.use("/auth",authRouter)
app.use("/user",userRoute)
app.listen(process.env.port, async () => {
  try {
    await connection;

    console.log("connection established");
  } catch (err) {
    res.send("something went wrong");
    console.log(err);
  }
  console.log(`listening on port ${process.env.port}`);
});
