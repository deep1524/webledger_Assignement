import axios from "axios";
import {Link} from "react-router-dom"


export default function Card({ data }) {
  
  const saveRecipe = async (product) => {
  
    let response = await axios.post(`http://localhost:8080/recipe/save`, {
      id: product.id,
      title: product.title,
      image: product.image,
    });
    response = await response.data.message;

    console.log(response);
    alert(response);
  };


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        
         
            {data.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt={product.imageType}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <div className="mt-4">
                <button
                  onClick={() => saveRecipe(product)}
                  className=" mr-8 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save Recipe
                </button>
                <button
               
                  className=" mr-8 rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                   <Link to={`/recipe/${product.id}`}> View Recipe</Link>
                 
                </button>
              </div>
            </a>
          ))}
       
       
      
        
        </div>
      </div>
    </div>
  );
}
