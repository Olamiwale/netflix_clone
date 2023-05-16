import React from "react";
import Netflix from "../assets/Netflix.png";
import { Link } from "react-router-dom";

export default function Password() {
  return (
    <div className="bg-white text-black h-screen">
      <div className=" w-full flex justify-between items-center py-10 px-8 shadow-md">
        <div>
          <Link to="/">
          
            <img
              className="w-[150px] h-full"
              src={Netflix}
              alt="Netflix_logo"
            />
          </Link>
        </div>

        <button className="p-1 px-3 font-bold text-2xl">
          <Link to="/login"> Sign in</Link>
        </button>
      </div>

      <div className="flex flex-col justify-center w-[450px] m-auto py-16">
        <p className="uppercase font-semibold">step 1 of 3</p>
       <p className="text-4xl font-bold py-1">Welcome back!</p>
       <p className="text-4xl font-bold py-1">Joining Netflix is easy</p>
       <p className="text-2xl py-4">Enter your password and you'll be watching in no time.</p>

       <div>
        <p></p>
        <label className="text-2xl py-4">
            Email
        </label>
        <input className="border border-gray-500 w-full p-4 mt-4" />

        <p className="py-4 text-xl text-blue-600">Forgot Your Password</p>
       </div>

       <button className="bg-red-700 p-6 text-3xl font-semibold text-white rounded-md"> Next</button>
      </div>
    </div>
  );
}
