import React from "react";
import { useRouter } from "next/navigation";

const DropMenu = () => {
  const router = useRouter();
  

  const handleClickFavourites = () => {
    router.push("/favourites");
  };



  return (
    <div className="absolute top-12 right-0 bg-white border p-4 mt-20 mr-2">
      
      <button className="mb-2 block" type="button" onClick={handleClickFavourites}>
        Favourites
      </button>
      <button className="button block text-center" type="button" >
        Sign Out
      </button>
    </div>
  );
};

export default DropMenu;

