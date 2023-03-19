import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
    >
      <img
        src={category.image}
        alt="Product category"
        className="transform transition ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
      <div className="p-4 flex items-center justify-center absolute inset-0">
        <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-xl font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-black">
          {category.name}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
