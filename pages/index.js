import Card from "../components/card";
import Heading from "../components/heading";
import Layout from "../components/layout";
import ManiLayout from "../components/mainlayout";
import data from "../utils/data";

export default function Home() {
  return (
    <>
      <ManiLayout>
        <Layout className={"mt-10"}>
          <Heading title={"Products"} />
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {data.products.map((products) => {
              return (
                <Card
                  key={products.name}
                  img={products.image}
                  title={products.name}
                  rating={products.rating}
                  price={products.price}
                  slug={`/product/${products.slug}`}
                />
              );
            })}
          </div>
        </Layout>
      </ManiLayout>
    </>
  );
}
