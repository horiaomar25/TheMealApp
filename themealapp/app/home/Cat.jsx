import React, { useState } from "react";

const Cat = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      <h2>Categories</h2>

      <section className="m-6 text-center">
        {chunkedCategories.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center">
            {row.map((category) => (
              <div
                key={category.idCategory}
                className={`border-2 border-black hover:shadow-nav-shadow m-4 p-2 w-full sm:w-32 justify-center items-center cursor-pointer rounded-lg ${
                  selectedCategory === category.strCategory ? "bg-orange" : ""
                }`}
                onClick={() => {
                  onSelectCategory(category.strCategory);
                  setSelectedCategory(category.strCategory);
                }}
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
