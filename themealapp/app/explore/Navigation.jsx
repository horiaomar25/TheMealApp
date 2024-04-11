"use client"
import React, { useState } from "react";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="navbar bg-yellow theme-black-on-yellow">
      <div className="flex-1">
      <img src="./cooking.png" alt="logo" width={100} className="m-4" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          
          <li>
            <details>
              <summary>
            
          <img
            onClick={handleMenuClick}
            src="./avatar.png"
            alt="avatar"
            width={100}
          />
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li className="text-black"><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
