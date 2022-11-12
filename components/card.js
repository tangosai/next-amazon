import Link from "next/link";
import React from "react";

const Card = ({ img, title, rating, price, slug }) => {
  return (
    <>
      <Link href={slug}>
        <div className="relative border p-3 rounded-md">
          <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
            <img
              src={img}
              alt={title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div>
            <div className="mt-4 flex justify-between ">
              <div>
                <h3 className="text-xl font-medium text-gray-700">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{rating}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">${price}</p>
            </div>
            <button className="bg-red-600 w-full uppercase font-semibold text-white mt-4 rounded-lg py-3">
              Add to
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
