import React from "react";
import Netflix from "../assets/Netflix.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 px-8">
      <div>
        <img className="w-[100px] h-full" src={Netflix} alt="Netflix_logo" />
      </div>

      <button className="bg-red-600 rounded-lg p-1 px-3 text-white">
        Sign in
      </button>
    </div>
  );
}
