const express = require("express");
const recipeRouter = express.Router()
const axios = require("axios");
const { RecipeModel } = require("../Models/Recipe");
const apiKey = "fb24cb7979be4bd4a2e516bc142c63fa"
const app=express.Router();
app.get("/search",async(req,res)=>{
    try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${req.query.query}`)
        res.json(response.data.results)
    }
    catch(e){
        res.json(e)
    }
})

app.get("/details/:id",async(req,res)=>{
  
  try{
    const response = await axios.get(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${apiKey}`)
    res.json(response.data)
  }
  catch(e){
    res.json(e)
  }
})

app.post("/save",async(req,res)=>{
    try {
        const { id, title, image } = req.body;
    
        const existingRecipe = await RecipeModel.findOne({ recipeId: id});
    
        if (existingRecipe) {
          return res.json({ message: "Recipe already saved" });
        }
    
        const newRecipe = new RecipeModel({
          recipeId: id,
          title,
          image,
        });
    
        await newRecipe.save();
    
        res.json({ message: "Recipe saved successfully" });
      } catch (e) {
        res.json({ message: "Couldn't save the recipe" });
      }
})

app.get("/saved",async(req,res)=>{
    try {
        const savedRecipes = await RecipeModel.find();
        res.json(savedRecipes);
      } catch (e) {
        res.json(e);
      }
})

module.exports = app;