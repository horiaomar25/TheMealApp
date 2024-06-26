"use client"
import React, { useState } from "react";
import Image from "next/image";

const Categories = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    setSelectedCategory(category);
  };

  return (
    <>
     <h2 className="text-4xl font-bold m-4 text-black">Categories</h2>

    

      <section className="m-6 text-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-yellow " >
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className={`border-2 border-black hover:shadow-nav-shadow p-2 justify-center items-center cursor-pointer rounded-lg ${
              selectedCategory === category.strCategory ? "bg-orange" : ""
            }`}
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            <div className="flex ">
            <Image
    src={category.strCategoryThumb}
    width={50}
    height={50}
    style={{ width: "auto" }} // Add this style to maintain aspect ratio
    className="mr-4"
    alt={category.strCategoryThumb}
/>
            <p className="font-poppins text-lg text-black ">{category.strCategory}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Categories;
