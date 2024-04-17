import React from 'react';
import Image from 'next/image';

const FavourtiteList = ({ favourites }) => {
  return (
    <section className=' m-4 rounded-xl '>

      <div className="grid grid-cols-3 gap-4">
        {favourites.map((favourite) => (
          <div key={favourite.id} className=' rounded-xl flex flex-col p-6'>
            <Image src={favourite.strMealThumb} alt={favourite.strMeal} className='w-11/12 border border-black ' width={100} height={50} />
            <div className='bg-orange w-11/12'>
              <h3 className='bg-orange text-xl font-semibold p-4 border border-black'>{favourite.strMeal}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FavourtiteList;
