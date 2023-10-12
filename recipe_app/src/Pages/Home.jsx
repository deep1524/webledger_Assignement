import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

 
  const searchRecipe = async () => {
    const response = await axios.get(
      `http://localhost:8080/recipe/search?query=${search}`
    );

    setData(response.data);
   
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-10">
        <input
          type="text"
          name="price"
          id="price"
          value={search}
          className="block w-full px-2 
          text-2xl
          rounded-md border-0 py-4 pl-7 pr-20
           text-gray-900 ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-indigo-600 sm:text-sm sm:leading-6 items-center m-auto"
          placeholder="Search Your Recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={searchRecipe}
          className="mt-10 px-10 py-4 text-lg font-semibold bg-slate-700 rounded-full"
        >
          Search
        </button>
      </div>
      {data.length > 0 ? <Card data={data} /> : ""}
    </div>
  );
};

export default Home;
