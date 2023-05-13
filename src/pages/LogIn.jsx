import React from "react";
import { Link } from "react-router-dom";
import Netflix from "../assets/Netflix.png";

export default function LogIn() {
  return (
    <div
      className=" 
    bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg)] 
    bg-cover max-md:bg-none"
    >
      <div className=" w-full h-full bg-black/60">
        <div className="p-8">
          <Link to='/'><img
            className="w-[160px] h-[40px] cursor-pointer"
            src={Netflix}
            alt="Netflix_logo"
          />
          </Link>
          
        </div>
        <div className="w-[450px] mx-auto p-16 bg-black/70">
          <h1 className="text-3xl font-bold">Sign In</h1>

          <form className="w-full flex flex-col py-4">
            <input
              className="p-4 my-2 bg-gray-700 rounded"
              type="email"
              placeholder="Email or Phone Number"
              autoComplete="email"
            />

            <input
              className="p-4 my-2 bg-gray-700 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />

            <button className="bg-red-600 py-4 my-6 rounded font-bold">
              Sign In
            </button>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <p className="text-xl items-center">
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>

              <p className="text-xl">Need Help?</p>
            </div>
            <p className="py-8">
              <span className="text-gray-600">New to Netflix?</span>
              <Link to="/signup" className="text-xl font-semibold">
                Sign Up Now
              </Link>
            </p>

            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<span className="text-blue-400 underline"> Learn more</span>
            </p>
          </form>
        </div>

        <div className="bg-black/50 p-16 mt-[100px]  text-gray-500">
          <div className=" w-[80%] hidden lg:flex justify-between">
            <ul className="underline">
              <li className="py-3">FQA</li>
              <li className="py-3">Cookies Reference</li>
            </ul>
            <ul className="underline">
              <li className="py-3">Help center</li>
              <li className="py-3">Corporate information</li>
            </ul>
            <ul className="underline">
              <li className="py-3">term of Use</li>
            </ul>
            <ul className="underline">
              <li className="py-3">Privacy</li>
            </ul>
          </div>

          <div className=" w-[80%] hidden md:flex justify-between lg:hidden">
            <ul className="underline">
              <li className="py-3">FQA</li>
              <li className="py-3">Privacy</li>
            </ul>
            <ul className="underline">
              <li className="py-3">Help center</li>
              <li className="py-3">Corporate Preferences</li>
            </ul>
            <ul className="underline">
              <li className="py-3">Term of Use</li>
              <li className="py-3">Corporate Information</li>
            </ul>
          </div>

          <div className="  w-[80%] mt-[-100px] md:hidden">
            <div className="bg-gray-600 w-full h-1 absolute left-0 md:hidden">
              {" "}
            </div>
            <div className="flex justify-between">
              <ul className="underline">
                <li className="py-3 mt-16">FQA</li>
                <li className="py-3">Privacy</li>
                <li className="py-3">Term of Use</li>
              </ul>
              <ul className="underline mt-16">
                <li className="py-3">Help center</li>
                <li className="py-3">Corporate Preferences</li>
                <li className="py-3">Corporate Information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
        

      
*/
