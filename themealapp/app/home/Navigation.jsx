"use client"
import React from "react";
import { useState } from "react";
import DropMenu from "../Categories/dropmenu";
import Link from "next/link";
import SearchInput from "./SearchInput";

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
    <nav className="sm:hidden md:hidden lg:flex font-poppins text-lg justify-between items-center  m-0">

      <div className="flex items-center"> {/* Create a container for the logo and title */}
        <img src="./logo.png" alt="logo" width={100} />
        <h1 className="font-poppins ml-4">The Meal App</h1> {/* Add margin to create space */}
      </div>

      <Link href="/Categories">Categories</Link>

      <div className="flex border items-end">
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
