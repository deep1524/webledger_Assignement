import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
const SavedRecipe = () => {
  const [data, setData] = useState([]);
  const getSavedRecipe = async () => {
    const response = await axios.get(`http://localhost:8080/recipe/saved`);
    setData(response.data);
  };
  useEffect(() => {
    setTimeout(() => {
      getSavedRecipe();
    }, 1000);
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="mt-10 text-5xl font-bold">Saved Recipe</h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          {data.length !== 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {data.map((product) => (
                <a key={product.recipeId} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.image}
                      alt={product.imageType}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <div className="mt-4">
                    <button className=" mr-8 rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      <Link to={`/recipe/${product.recipeId}`}>
                        {" "}
                        View Recipe
                      </Link>
                    </button>
                  </div>
                </a>
              ))}
            </div>
          ) : (
          <h1 className="text-4xl font-bold">Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedRecipe;
