"use client";
import React from "react";
import { useState } from "react";
import DropMenu from "../Categories/dropmenu";
import Link from "next/link";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  

  return (
    <header className=" m-4  rounded-md">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">

          {/* Create a container for the logo and title */}
          <div className=" md:flex">
          <img src="./cooking.png" alt="logo" width={100} className="m-4" />
        
          {/* Add margin to create space */} 
          </div>
        </div>  
        <Link href="/home" className="font-bold">Home</Link>
        <Link href="/explore" className="font-bold">Explore</Link>
        <Link href="/Categories" className="font-bold">Categories</Link>
      

       

        <div className="flex  items-end flex-col">
          <img
            onClick={handleMenuClick}
            src="./avatar.png"
            alt="avatar"
            width={100}
          />

          {menu && <DropMenu  />}
          {/* Render the DropdownMenu when menu is true */}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
