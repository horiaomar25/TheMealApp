import { data } from "autoprefixer";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border flex flex-col justify-center items-center rounded-lg bg-pink p-10 w-1/2">
        <img src="/logo.png" alt="logo" width={200} className="rounded" />
        <img
          src="https://see.fontimg.com/api/renderfont4/x30zV/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGhlIE1lYWwgQXBw/queensides-medium.png"
          alt="logo"
          width={200}
          className="mt-5"
        />
        <label className="mt-10">Email</label>
        <input
          className="border mt-10 rounded-md p-2"
          type="text"
          placeholder="Email"
          value={data?.email}
          onChange={handleChange}
        />
        <label className="mt-5">Password</label>
        <input
          className="border mt-5 rounded-md p-2"
          type="text"
          placeholder="Password"
          value={data?.password}
          onChange={handleChange}
        />
        <button className="mt-4 border p-2 rounded-lg bg-slate-400 w-60">
          Login
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
