import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const Categories = () => {
  const {data:categoriesAll = []} = useQuery({
    queryKey: ['https://phone-seeker-server.vercel.app//categories'],
    queryFn: () => fetch(`categories.json`)
    .then(res => res.json())
});
  return (
    <section className="my-10">
      {/* Page Heading */}
      <h2 className="text-4xl font-semibold py-2 border-b-2 border-gray-200 mb-4 lg:mb-8 uppercase">
      Categories <br />
        <span className="block sm:inline-block text-xl text-gray-600 font-normal">
          Everything looks great!
        </span>
      </h2>
      {/* END Page Heading */}

      {/* Product List Section: Categories Grid */}
      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {
              categoriesAll.map((category, index) => <CategoryCard key={index} category={category}/>)
            }
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </section>
  );
};

export default Categories;
