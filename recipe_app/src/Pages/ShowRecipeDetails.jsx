import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Example() {
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(Object.keys(data).length);
  const getDetails = async () => {
    const response = await axios.get(
      `http://localhost:8080/recipe/details/${id}`
    );
    console.log("respone", response.data);
    setData(response.data);
  };
  useEffect(() => {
    setTimeout(function () {
      getDetails();
    }, 500);
  }, []);

  return (
    <>
      {Object.keys(data).length !== 0 ? (
        <div className="bg-white">
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li key={data.id}>
                  <div className="flex items-center">
                    <a
                      href={""}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {data.title}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li className="text-sm">
                  <a
                    href={""}
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {data.title}
                  </a>
                </li>
              </ol>
            </nav>

            {/* Image  */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  src={data.image}
                  alt={""}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {data.title}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">{`Price:- ${data.pricePerServing}`}</p>

                {/* Ingredients */}
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="mt-10">
                        <h3 className="text-sm font-medium text-gray-900">
                          Ingredients Name
                        </h3>

                        <div className="mt-4">
                          <ul
                            role="list"
                            className="list-disc space-y-2 pl-4 text-sm"
                          >
                            {data.extendedIngredients?.map((item) => (
                              <li key={item.id} className="text-gray-400">
                                <span className="text-gray-600">
                                  {item.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="mt-10">
                  <Link to={"/"}>
                    <button
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Back to Home
                    </button>
                  </Link>
                </form>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Instruction */}
                <div>
                  <h3 className="text-5xl mb-4">Instructions</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {data.instructions}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className=" font-medium text-gray-900 text-5xl">
                    Summary
                  </h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600 font-semibold">
                      {data.summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="mt-80 font-bold text-8xl">Loading...</h1>
      )}
    </>
  );
}
