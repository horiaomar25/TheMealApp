import React from 'react'

const HeroSection = () => {
  return (
    <section className="flex flex-row items-center justify-center w-full bg-orange text-black font-poppins">
    <div className='border border-black p-10  '>
      <h1 className="text-4xl font-bold">Welcome to The Meal App</h1>
      <p className="mt-4">Discover new recipes and share your own</p> 
         <img src="./cooking.png" alt="cooking" width={200} className="mt-8" />
      </div>

      
    </section>
  )
}

export default HeroSection