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
      <section className="m-6 ">
        {chunkedCategories.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((category) => (
              <div
                key={category.idCategory}
                className="border w-1/2 m-6 flex flex-col p-2 justify-center items-center cursor-pointer rounded-lg hover:shadow-nav-shadow"
                onClick={() => onSelectCategory(category.strCategory)}
              >
                <p>{category.strCategory}</p>
                <img
                  src={category.strCategoryThumb}
                  alt="category picture"
                  width={300}
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default Categories;
