"use client";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="border flex flex-col justify-center items-center rounded-lg bg-pink p-10 w-1/2">
          <img src="/logo.png" alt="logo" width={200} className="rounded" />
          <img
            src="https://see.fontimg.com/api/renderfont4/x30zV/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGhlIE1lYWwgQXBw/queensides-medium.png"
            alt="logo"
            width={200}
            className="mt-5"
          />
          <input
            className="border mt-10 rounded-md p-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="border mt-5 rounded-md p-2"
            type="text"
            placeholder="Password"
          />
          <button className="mt-4 border p-2 rounded-lg bg-slate-400 w-60">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
