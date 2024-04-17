import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="flex flex-row items-center justify-center w-full bg-orange text-black font-poppins">
    <div className=' border-black p-10  '>
      <h1 className="text-4xl font-bold">Welcome to The Meal App</h1>
      <p className="mt-4">Discover new recipes and share your own</p> 
      <Image
  src="/cooking.png"
  alt="image of a pizza"
  width={70}
  height={20}
  priority={true} // Using boolean value instead of string
  style={{ width: "50%", height: "auto" }} // Maintain aspect ratio
/>


         <button className='bg-yellow border border-black w-48 p-2 rounded-xl'>Explore</button>
      </div>
      
      <div className='m-8'>
      <Image 
  src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" 
  alt="pizza" 
  width={500} 
  height={100} 
  className="rounded-full" 
  priority={true} 
  style={{ width: "100%", height: "auto" }} // Maintain aspect ratio
/>

      </div>

      
    </section>
  )
}

export default HeroSection