import React, { useState } from "react";
import Image from "next/image";

const Cat = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    setSelectedCategory(category);
  };

  return (
    <>
     <h2 className="text-4xl font-bold m-4">Categories</h2>

      <section className="m-6 text-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className={`border-2 border-black hover:shadow-nav-shadow p-2 justify-center items-center cursor-pointer rounded-lg ${
              selectedCategory === category.strCategory ? "bg-orange" : ""
            }`}
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            <div className="flex ">
            <Image src={category.strCategoryThumb} width={50} height={50} className="mr-4"/>
            <p className="font-poppins text-lg ">{category.strCategory}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Cat;
