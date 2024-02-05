/* eslint-disable @next/next/no-img-element */
import React from "react";

const Categories = ({ categories, onSelectCategory }) => {
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedCategories = chunkArray(categories, 3);

  return (
    <>
    <h2>Catergories</h2>

      <section className="m-6 ">
        {chunkedCategories.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center ">
            {row.map((category) => (
              <div
                key={category.idCategory}
                className="border hover:shadow-nav-shadow hover:bg-orange m-4 flex flex-col p-6 justify-center items-center cursor-pointer rounded-lg"
                onClick={() => onSelectCategory(category.strCategory)}
              >
                
                <img
                  src={category.strCategoryThumb}
                  alt="category picture"
                  width={300}
                />
                <p className="font-poppins text-xl">{category.strCategory}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default Categories;
