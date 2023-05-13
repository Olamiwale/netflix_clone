import React from "react";
import Netflix from "../assets/Netflix.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 px-8">
      <div>
        <Link to='/'> <img className="w-[100px] h-full" 
        src={Netflix} alt="Netflix_logo" />
        </Link>
       
      </div>

      <button className="bg-red-600 rounded-lg p-1 px-3 text-white">
        <Link to='/login'> Sign in
        </Link>
       
      </button>
    </div>
  );
}
