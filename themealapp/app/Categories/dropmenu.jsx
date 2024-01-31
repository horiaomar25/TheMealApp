import React from "react";

import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const DropMenu = () => {
  const router = useRouter();
  const supabase = createClient(
    "https://boxkznfnxnciiwxzpihk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJveGt6bmZueG5jaWl3eHpwaWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NDk0NzAsImV4cCI6MjAyMTMyNTQ3MH0.GhajM_RhfKiOvHWfhBvtklihIYCG996-RrnmmrJYPok"
  );

  const signOutHandler = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const handleClickFavourites = () => {
   router.push("/favourites")
  }

  const profileHandler = () =>{
    router.push("/profile")
  }
  return (
    <>
      <div className="border w-28 h-28">
        <button className="mb-2 mt-2" type="button" onClick={profileHandler}>Profile</button>
        <button className="mb-2" type="button" onClick={handleClickFavourites}>Favourites</button>
        <button className="button block text-center" type="button" onClick={signOutHandler}>
          Sign Out
        </button>
      </div>
    </>
  );
};

export default DropMenu;
