import React from "react";
import Heading from "../../components/heading";
import Layout from "../../components/layout";
import ManiLayout from "../../components/mainlayout";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Link from "next/link";

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    return (
      <>
        <ManiLayout>
          <Layout className={"mt-10  text-center"}>
            <Link
              href="/"
              className="text-base mb-2 inline-block bg-slate-900 px-5 py-2 text-white"
            >
              Go back
            </Link>
            <h1 className="text-red-500 text-5xl">
              😌😌😌Sorry, Product Not Found
            </h1>
          </Layout>
        </ManiLayout>
      </>
    );
  }
  return (
    <>
      <ManiLayout title={product.name} description={product.description}>
        <Layout className={"mt-10"}>
          <Link href="/" className="text-red-500">
            Go back
          </Link>
          <div className="mt-2">
            <div className="grid gap-x-10 md:grid-cols-3">
              <div className="mt-3 sm:w-2/4 md:w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-3 md:col-span-2">
                <Heading title={product.name} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                  <div className="">
                    <ul className="">
                      <li className="p-3 mt-5 border-b-2">
                        <label class="text-sm mb-2 block text-gray-500">
                          Category
                        </label>
                        <h3 class="text-sm font-medium leading-5">
                          {product.category}
                        </h3>
                      </li>
                      <li className="p-3 mt-3 border-b-2">
                        <label class="text-sm mb-2 block text-gray-500">
                          Brand
                        </label>
                        <h3 class="text-sm font-medium leading-5">
                          {product.brand}
                        </h3>
                      </li>
                      <li className="p-3 mt-1 border-b-2">
                        <label class="text-sm mb-2 block text-gray-500">
                          Rating
                        </label>
                        <h3 class="text-sm font-medium leading-5">
                          {product.rating} stars ({product.numReviews})
                        </h3>
                      </li>
                      <li className="p-3 mt-1 border-b-2">
                        <label class="text-sm mb-2 block text-gray-500">
                          Description
                        </label>
                        <h3 class="text-sm font-medium leading-5">
                          {product.description}
                        </h3>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="p-3 mt-5 border-b-2">
                        <label class="text-sm mb-2 block text-gray-500">
                          Price
                        </label>
                        <h3 class="text-xl font-medium leading-5">
                          ${product.price}
                        </h3>
                      </li>
                      <li className=" p-3 mt-1 md:border-b-2 mb-10 md:mb-0">
                        <label class="text-sm mb-2 block text-gray-500">
                          Stock
                        </label>
                        {product.countInStock > 0 ? (
                          <h3 class="text-xs font-medium leading-5 text-white bg-green-500 inline-block px-2 py-1">
                            In Stock
                          </h3>
                        ) : (
                          <h3 class="text-xs font-medium leading-5 text-white bg-red-600 inline-block px-2 py-1">
                            Unavailable
                          </h3>
                        )}
                      </li>
                      <li className="p-3 mt-1">
                        <button className="bg-red-600 w-full h-12 uppercase font-semibold text-white mt-1 md:rounded-lg fixed bottom-0 left-0 md:relative">
                          Add to cart
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </ManiLayout>
    </>
  );
};

export default ProductScreen;
