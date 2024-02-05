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

  const handleSignOut = () => {
    // Perform sign-out logic here
    // For example, you can use your authentication library to sign the user out
    // After signing out, redirect the user to the login page
    // For demonstration purposes, you can use a placeholder URL like "/login"
    window.location.href = "/";
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
        <Link href="/home">Home</Link>
        <Link href="/explore">Explore</Link>
      

       

        <div className="flex  items-end flex-col">
          <img
            onClick={handleMenuClick}
            src="./avatar.png"
            alt="avatar"
            width={100}
          />

          {menu && <DropMenu handleSignOut={handleSignOut} />}
          {/* Render the DropdownMenu when menu is true */}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
