import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const[isSignInForm, setisSignInForm] = useState(true)

  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white h-4/6 w-3/12 bg-opacity-85">
        <h1 className="from-neutral-300 py-4 text-4xl font-medium">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 my-4 w-full bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-900"
        />
        {!isSignInForm && (<input
          type="password"
          placeholder="Confirm Password"
          className="p-2 my-4 w-full  bg-gray-900"
        />)}
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In" : "Sign Up"}</button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign in now."}</p>
      </form>
    </div>
  );
};

export default Login;
