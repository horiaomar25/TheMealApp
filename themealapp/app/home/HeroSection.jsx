import React from 'react'

const HeroSection = () => {
  return (
    <section className="flex flex-row items-center justify-center w-full bg-orange text-black font-poppins">
    <div className=' border-black p-10  '>
      <h1 className="text-4xl font-bold">Welcome to The Meal App</h1>
      <p className="mt-4">Discover new recipes and share your own</p> 
         <img src="./cooking.png" alt="cooking" width={200} className="mt-8" />
         <button className='bg-yellow border border-black w-48 p-2 rounded-xl'>Explore</button>
      </div>
      
      <div className='m-8'>
        <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/x0lk931587671540.jpg" alt="pizza" width={500} className="rounded-full " />
      </div>

      
    </section>
  )
}

export default HeroSection