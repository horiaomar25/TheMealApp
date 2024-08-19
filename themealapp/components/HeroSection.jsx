import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-orange text-black font-poppins">
      <div className="  flex flex-col justify-center items-center p-10  ">
        <h1 className="text-black text-7xl text-center font-bold mt-8 font-Inter -tracking-tight">
         
          <span className="pb-4 font-extrabold -tracking-tight bg-clip-text text-transparent bg-yellow">
           The Meal{" "}  App
          </span>
        </h1>

        <p className="mt-4">Discover new recipes and share your own</p>
        <Image
          src="/cooking.png"
          alt="image of a pizza"
          width={70}
          height={20}
          priority={true} // Using boolean value instead of string
          style={{ width: "50%", height: "auto" }} // Maintain aspect ratio
        />

       
      </div>
    </section>
  );
};

export default HeroSection;



