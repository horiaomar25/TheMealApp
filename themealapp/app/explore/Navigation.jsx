"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Navigation = () => {
 

  return (
    <>
    <div className="navbar bg-base-100">
          <div className="flex-none">
              <label htmlFor="my-drawer" className="btn btn-primary m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
              <button className="btn btn-square btn-ghost">

              </button>
          </div>
          <div className="flex-1 justify-center mb-8">
              <a className="btn btn-ghost text-xl">
              <Image
  src="/cooking.png"
  alt="image of a pizza"
  width={70}
  height={20}
  priority={true} // Using boolean value instead of string
  style={{ width: "50%", height: "auto" }} // Maintain aspect ratio
/>

              
                  </a>
          </div>
          <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
          </div>
      </div><div className="flex-none">
              <div className="drawer">
                  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">{/* Page content here */}</div>
                  <div className="drawer-side">
                      <label
                          htmlFor="my-drawer"
                          aria-label="close sidebar"
                          className="drawer-overlay"
                      ></label>
                      <ul className="menu p-4 w-80 min-h-full bg-yellow text-center ">
                          {/* Sidebar content here */}
{/*Maintain aspect ratio for console.warning*/}
                          <Image
  src="/avatar.png"
  alt="avatar"
  width={100}
  height={100}
  priority={true} // Using boolean value instead of string
  style={{ width: "50%", height: "auto", marginBottom: "10px" }}// Maintain aspect ratio
/>

                          <li className="hover:bg-orange hover:w-full hover:border rounded-md text-lg">
                             <Link href="/" className="text-center">Home</Link> 
                          </li>
                          <li className="hover:bg-orange hover:w-full hover:border rounded-md text-lg">
                          <Link href="/explore">Explore</Link> 
                          </li>

                          <li className="hover:bg-orange hover:w-full hover:border rounded-md text-lg">
                          <Link href="/Categories">Catergories</Link> 
                          </li>
                          <li className="hover:bg-orange hover:w-full hover:border rounded-md text-lg">
                          <Link href="/favourites">Favourites</Link> 
                          </li>
                      </ul>
                  </div>
              </div>
          </div></>
  )
};

export default Navigation;

