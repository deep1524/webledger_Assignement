const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  recipeId: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
});

const RecipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = { RecipeModel };