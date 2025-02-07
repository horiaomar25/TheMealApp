import React from 'react';
import Image from "next/image"

const LatestPicks = () => {
  const meals = [
    {
      idMeal: "52771",
      strMeal: "Spicy Arrabiata Penne",
      strDrinkAlternate: null,
      strCategory: "Vegetarian",
      strArea: "Italian",
      strInstructions: "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
      strMealThumb: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      strTags: "Pasta,Curry",
      strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
      strIngredient1: "penne rigate",
      strIngredient2: "olive oil",
      strIngredient3: "garlic",
      strIngredient4: "chopped tomatoes",
      strIngredient5: "red chile flakes",
      strIngredient6: "italian seasoning",
      strIngredient7: "basil",
      strIngredient8: "Parmigiano-Reggiano",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: null,
      strIngredient17: null,
      strIngredient18: null,
      strIngredient19: null,
      strIngredient20: null,
      strMeasure1: "1 pound",
      strMeasure2: "1/4 cup",
      strMeasure3: "3 cloves",
      strMeasure4: "1 tin ",
      strMeasure5: "1/2 teaspoon",
      strMeasure6: "1/2 teaspoon",
      strMeasure7: "6 leaves",
      strMeasure8: "spinkling",
      strMeasure9: "",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: null,
      strMeasure17: null,
      strMeasure18: null,
      strMeasure19: null,
      strMeasure20: null,
      strSource: null,
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null
    },
    {
      idMeal: "52854",
      strMeal: "Pancakes",
      strDrinkAlternate: null,
      strCategory: "Dessert",
      strArea: "American",
      strInstructions: "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go. Serve with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.",
      strMealThumb: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
      strTags: "Breakfast,Desert,Sweet,Fruity",
      strYoutube: "https://www.youtube.com/watch?v=LWuuCndtJr0",
      strIngredient1: "Flour",
      strIngredient2: "Eggs",
      strIngredient3: "Milk",
      strIngredient4: "Sunflower Oil",
      strIngredient5: "Sugar",
      strIngredient6: "Raspberries",
      strIngredient7: "Blueberries",
      strMeasure1: "100g",
      strMeasure2: "2 large",
      strMeasure3: "300ml",
      strMeasure4: "1 tbls",
      strMeasure5: "to serve",
      strMeasure6: "to serve",
      strMeasure7: "to serve",
      strSource: "https://www.bbcgoodfood.com/recipes/2907669/easy-pancakes",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null
    },
    {
      idMeal: "52850",
      strMeal: "Chicken Couscous",
      strDrinkAlternate: null,
      strCategory: "Chicken",
      strArea: "Moroccan",
      strInstructions: "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more. Tip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.",
      strMealThumb: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=GZQGy9oscVk",
      strIngredient1: "Olive Oil",
      strIngredient2: "Onion",
      strIngredient3: "Chicken Breast",
      strIngredient4: "Ginger",
      strIngredient5: "Harissa Spice",
      strIngredient6: "Dried Apricots",
      strIngredient7: "Chickpeas",
      strIngredient8: "Couscous",
      strIngredient9: "Chicken Stock",
      strIngredient10: "Coriander",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "1 tbsp",
      strMeasure2: "1 chopped",
      strMeasure3: "200g",
      strMeasure4: "pinch",
      strMeasure5: "2 tblsp",
      strMeasure6: "100g",
      strMeasure7: "400g",
      strMeasure8: "250g",
      strMeasure9: "300ml",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: "",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource: null,
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null
    }
  ];

  return (
    <>
    <section className='bg-yellow'>
  <h1 className="text-4xl font-bold  text-black bg-yellow text-center p-5">Popular Recipes of the Week</h1>
  <div className="flex justify-center"> {/* Use flexbox to center the section */}
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="flex flex-col justify-center items-center p-6 w-80 rounded-lg m-6 border border-black hover:bg-orange"> 
          <Image src={meal.strMealThumb} alt={meal.strMeal} width={400} height={20} />
          <h5 className="mt-4 ">{meal.strMeal}</h5>
        </div>
      ))}
    </div>
  </div>
  </section>
</>

  );
}

export default LatestPicks;
