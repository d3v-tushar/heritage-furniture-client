import React from "react";

const Categories = () => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="/"
              className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-01.jpg"
                alt="Product category"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-xl font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-black">
                  Chairs
                </div>
              </div>
            </a>
            <a
              href="/"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-02.jpg"
                alt="Product category"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-xl font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-black">
                  Sofas
                </div>
              </div>
            </a>
            <a
              href="/"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-06.jpg"
                alt="Product category"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-xl font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-black">
                  Lamps
                </div>
              </div>
            </a>
            <a
              href="/"
              className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-05.jpg"
                alt="Product category"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-xl font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-black">
                Tables
                </div>
              </div>
            </a>
            <a
              href="/"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-04.jpg"
                alt="Product category"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-xl font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-black">
                  Decor
                </div>
              </div>
            </a>
            <a
              href="/"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-03.jpg"
                alt="Product category"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-xl font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-black">
                  Pendants
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </section>
  );
};

export default Categories;
