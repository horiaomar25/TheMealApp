"use client";
import { supabase } from "./lib/supabase";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [data, setData] = useState({ email: '', password: '' });  
  const router = useRouter();

  const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

  const handleLogin = async () => {
      try {
          const { data: dataUser, error } = await supabase.auth.signInWithPassword({
              email: data.email,
              password: data.password,
          });


          if (dataUser) {
              router.push('/home');
          } 

      } catch (error) {
          console.error('Sign in error:', error.message);
      }
  };

  return (
      <div className="flex flex-col justify-center items-center h-screen ">
          <div className="border-2 border-black flex flex-col justify-center items-center rounded-lg bg-orange p-10 w-11/12 .h-2/5 sm:w-1/2 lg:w-1/2 md:w-1/2 ">
              <img src="/cooking.png" alt="logo" width={150} className="rounded" />
              <img
                  src="https://see.fontimg.com/api/renderfont4/x30zV/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGhlIE1lYWwgQXBw/queensides-medium.png"
                  alt="logo"
                  width={200}
                  className="mt-5"
              />
              <label className="mt-4">Email</label>
              <input
                  className="border mt-2 rounded-md p-2 w-1/2"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
              />
              <label className="mt-5">Password</label>
              <input
                  className="border  rounded-md p-2 w-1/2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
              />
              <button className="mt-4 border-2 border-black p-2 rounded-lg bg-yellow hover: bg-orange w-60 font-poppins text-xl" onClick={handleLogin}>
                  Login
              </button>
          </div>
      </div>
  );
}