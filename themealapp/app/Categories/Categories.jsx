"use client"
import React, { useState } from "react";
import Image from "next/image";

const Categories = ({ categories, onSelectCategory, selectedCategory }) => {
 

  return (
    <>
    <section className="flex flex-col items-center justify-center w-full bg-orange text-black font-poppins">
     <h2 className="text-4xl font-bold m-4 text-black">Categories</h2>

    

      <div className="m-6 text-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4  " >
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className={`border-2 border-black  p-2 justify-center items-center cursor-pointer rounded-lg ${
              selectedCategory === category.strCategory ? "bg-yellow" : ""
            }`}
            onClick={() => onSelectCategory(category.strCategory)}
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
      </div>
      </section>
    </>
  );
};

export default Categories;
