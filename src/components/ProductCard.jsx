import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getOriginalPrice } from "../utils/getOriginalPrice";

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data;
};

const ProductCard = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isPending)
    return (
      <h1 className="mt-10 text-center text-xl font-semibold">
        Loading, please wait...
      </h1>
    );

  if (error)
    return (
      <h1 className="mt-10 text-center text-xl font-semibold text-red-500">
        Oops... Something went wrong!
      </h1>
    );

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data.products?.map((item) => (
          <div
            key={item.id}
            className="flex h-[400px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
          >
            {/* Image */}
            <Link
              to="#"
              className="relative mx-3 mt-3 h-48 overflow-hidden rounded-xl"
            >
              <img
                className="h-full w-full object-cover"
                src={item.thumbnail}
                alt={item.title}
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-sm font-medium text-white">
                {item.discountPercentage}% OFF
              </span>
            </Link>

            {/* Details */}
            <div className="flex flex-grow flex-col px-5 pb-5">
              <div className="flex flex-col gap-2">
                <h5 className="line-clamp-2 flex h-12 items-center overflow-hidden text-lg font-semibold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                {/* Price and rating */}
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-2xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${getOriginalPrice(item.price, item.discountPercentage)}
                    </span>
                  </p>
                  <span className="rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {item.rating}⭐
                  </span>
                </div>
              </div>

              {/* Button */}
              <button className="mt-auto w-full rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
