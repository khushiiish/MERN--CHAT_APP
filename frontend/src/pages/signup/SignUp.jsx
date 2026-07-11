import React from "react";
import { Link } from "react-router-dom";
import { FaComments, FaUser, FaLock, FaArrowRight } from "react-icons/fa";

import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Card Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-6">
        {/* Glass Card - Scaled down responsiveness */}
        <div
          className="
          w-full
          max-w-[360px] 
          rounded-[22px] 
          border
          border-white/20
          bg-white/10
          backdrop-blur-3xl
          shadow-[0_15px_45px_rgba(0,0,0,0.45)]
          px-5 
          py-4 
          "
        >
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <div
              className="
              w-10 
              h-10 
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-500/10
              flex
              items-center
              justify-center
              "
            >
              <FaComments className="text-cyan-300 text-xl" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-2xl font-bold text-white">
            Sign Up <span className="text-cyan-400">ChatApp</span>
          </h1>

          <p className="text-center text-xs text-gray-300 mt-0.5 mb-3">
            Create your account to start chatting.
          </p>

          {/* Inputs Row */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {/* Full Name */}
            <div>
              <label className="block text-white text-xs mb-1">Full Name</label>
              <div
                className="
                flex
                items-center
                rounded-lg
                bg-white/10
                border
                border-white/20
                focus-within:border-cyan-400
                transition-all
                "
              >
                <div className="px-3">
                  <FaUser className="text-cyan-300 text-xs" />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="
                  w-full
                  bg-transparent
                  py-1.5 
                  pr-3
                  outline-none
                  text-white
                  text-sm
                  placeholder-gray-400
                  "
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-white text-xs mb-1">Username</label>
              <div
                className="
                flex
                items-center
                rounded-lg
                bg-white/10
                border
                border-white/20
                focus-within:border-cyan-400
                transition-all
                "
              >
                <div className="px-3">
                  <FaUser className="text-cyan-300 text-xs" />
                </div>
                <input
                  type="text"
                  placeholder="johndoe"
                  className="
                  w-full
                  bg-transparent
                  py-1.5 
                  pr-3
                  outline-none
                  text-white
                  text-sm
                  placeholder-gray-400
                  "
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-white text-xs mb-1">Password</label>
            <div
              className="
              flex
              items-center
              rounded-lg
              bg-white/10
              border
              border-white/20
              focus-within:border-cyan-400
              transition-all
              "
            >
              <div className="px-3">
                <FaLock className="text-cyan-300 text-xs" />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="
                w-full
                bg-transparent
                py-1.5 
                pr-3
                outline-none
                text-white
                text-sm
                placeholder-gray-400
                "
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="block text-white text-xs mb-1">
              Confirm Password
            </label>
            <div
              className="
              flex
              items-center
              rounded-lg
              bg-white/10
              border
              border-white/20
              focus-within:border-cyan-400
              transition-all
              "
            >
              <div className="px-3">
                <FaLock className="text-cyan-300 text-xs" />
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="
                w-full
                bg-transparent
                py-1.5 
                pr-3
                outline-none
                text-white
                text-sm
                placeholder-gray-400
                "
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-white text-xs mb-1">Gender</label>
            <GenderCheckbox />
          </div>

          {/* Button */}
          <button
            className="
            w-full
            py-2 
            rounded-lg
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            font-semibold
            text-sm 
            flex
            items-center
            justify-center
            gap-1.5
            hover:scale-[1.01]
            hover:shadow-lg
            hover:shadow-cyan-500/20
            transition-all
            duration-300
            "
          >
            Sign Up
            <FaArrowRight className="text-xs" />
          </button>

          {/* Divider */}
          <div className="flex items-center my-3">
            <div className="flex-1 border-t border-white/20"></div>
            <span className="mx-3 text-xs text-gray-400">OR</span>
            <div className="flex-1 border-t border-white/20"></div>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-300 text-xs">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;