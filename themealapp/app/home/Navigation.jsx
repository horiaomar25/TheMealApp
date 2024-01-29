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
    <header className="flex items-center justify-center text-center border m-4">
      <h1 className="font-poppins ">The Meal App</h1>
      <Link href="/Categories">Categories</Link>
      

      <div className="relative">
        <img
          onClick={handleMenuClick}
          src="./avatar.png"
          alt="avatar"
          width={100}
        />
        {menu && <DropMenu handleSignOut={handleSignOut} />}
        {/* Render the DropdownMenu when menu is true */}
      </div>
    </header>
  );
};

export default Navigation;
