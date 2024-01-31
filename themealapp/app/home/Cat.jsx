/* eslint-disable @next/next/no-img-element */
import React from "react";

const Cat = ({ categories, onSelectCategory }) => {
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedCategories = chunkArray(categories, 9);

  return (
    <>
    <h2>Catergories</h2>

      <section className="m-6 ">
        {chunkedCategories.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center ">
            {row.map((category) => (
              <div
                key={category.idCategory}
                className="border hover:shadow-nav-shadow m-4 flex flex-col p-2 w-32 justify-center items-center cursor-pointer rounded-lg"
                onClick={() => onSelectCategory(category.strCategory)}
              >
                
              
                
                <p className="font-poppins text-lg">{category.strCategory}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default Cat;
