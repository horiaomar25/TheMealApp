/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <>
     <section >
  {categories.map((category) => (
    <div key={category.idCategory} className="border w-1/2 m-6 flex flex-col p-6 " >
      <p  >{category.strCategory}</p>
      <img src={category.strCategoryThumb} alt="category picture" width={500}  />
      <p>{category.strCategoryDescription}</p>
    </div>
  ))}
</section>

    </>
  );
};

export default Categories;
