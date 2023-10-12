import React from 'react';
import {Routes,Route} from "react-router-dom";

import Home from '../Pages/Home';
import SavedRecipe from '../Pages/SavedRecipe';
import Login from '../Pages/Login';
import ShowRecipeDetails from '../Pages/ShowRecipeDetails';
import Signin from '../Pages/Signin';


const AllRoutes = () => {
    return (
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/recipe/:id" element={<ShowRecipeDetails/>}></Route>
       <Route path = "/recipe/saved" element={<SavedRecipe/>}></Route>
       <Route path = "/signin" element={<Signin/>}></Route>
       <Route path = "/login" element={<Login/>}></Route>
      </Routes>
    )
  }
  
  export default AllRoutes