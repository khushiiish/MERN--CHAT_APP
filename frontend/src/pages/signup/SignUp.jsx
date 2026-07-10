import React from "react";
import { Link } from "react-router-dom";
import {
  FaComments,
  FaUser,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-10">

        {/* Glass Card */}
        <div
          className="
          w-full
          max-w-[450px]
          rounded-[28px]
          border
          border-white/20
          bg-white/10
          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          px-8
          py-7
          "
        >

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div
              className="
              w-16
              h-16
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-500/10
              flex
              items-center
              justify-center
              "
            >
              <FaComments className="text-cyan-300 text-3xl" />
            </div>
          </div>

          {/* Heading */}

          <h1 className="text-center text-4xl font-bold text-white">
            Sign Up{" "}
            <span className="text-cyan-400">
              ChatApp
            </span>
          </h1>

          <p className="text-center text-gray-300 mt-2 mb-6">
            Create your account to start chatting.
          </p>

          {/* Full Name */}

          <div className="mb-4">

            <label className="block text-white text-sm mb-2">
              Full Name
            </label>

            <div
              className="
              flex
              items-center
              rounded-xl
              bg-white/10
              border
              border-white/20
              focus-within:border-cyan-400
              transition-all
              "
            >

              <div className="px-4">
                <FaUser className="text-cyan-300" />
              </div>

              <input
                type="text"
                placeholder="John Doe"
                className="
                w-full
                bg-transparent
                py-3
                pr-4
                outline-none
                text-white
                placeholder-gray-300
                "
              />

            </div>

          </div>

          {/* Username */}

          <div className="mb-4">

            <label className="block text-white text-sm mb-2">
              Username
            </label>

            <div
              className="
              flex
              items-center
              rounded-xl
              bg-white/10
              border
              border-white/20
              focus-within:border-cyan-400
              transition-all
              "
            >

              <div className="px-4">
                <FaUser className="text-cyan-300" />
              </div>

              <input
                type="text"
                placeholder="johndoe"
                className="
                w-full
                bg-transparent
                py-3
                pr-4
                outline-none
                text-white
                placeholder-gray-300
                "
              />

            </div>

          </div>
                    {/* Password */}

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">
              Password
            </label>

            <div
              className="
              flex
              items-center
              rounded-xl
              bg-white/10
              border
              border-white/20
              focus-within:border-cyan-400
              transition-all
              "
            >
              <div className="px-4">
                <FaLock className="text-cyan-300" />
              </div>

              <input
                type="password"
                placeholder="Enter Password"
                className="
                w-full
                bg-transparent
                py-3
                pr-4
                outline-none
                text-white
                placeholder-gray-300
                "
              />
            </div>
          </div>

          {/* Confirm Password */}

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">
              Confirm Password
            </label>

            <div
              className="
              flex
              items-center
              rounded-xl
              bg-white/10
              border
              border-white/20
              focus-within:border-cyan-400
              transition-all
              "
            >
              <div className="px-4">
                <FaLock className="text-cyan-300" />
              </div>

              <input
                type="password"
                placeholder="Confirm Password"
                className="
                w-full
                bg-transparent
                py-3
                pr-4
                outline-none
                text-white
                placeholder-gray-300
                "
              />
            </div>
          </div>

          {/* Gender */}

          <div className="mb-6">
            <label className="block text-white text-sm mb-2">
              Gender
            </label>

            <GenderCheckbox />
          </div>

          {/* Button */}

          <button
            className="
            w-full
            py-3
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            font-semibold
            text-lg
            flex
            items-center
            justify-center
            gap-2
            hover:scale-[1.02]
            hover:shadow-xl
            hover:shadow-cyan-500/30
            transition-all
            duration-300
            "
          >
            Sign Up
            <FaArrowRight />
          </button>

          {/* Divider */}

          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-white/20"></div>

            <span className="mx-4 text-gray-300">
              OR
            </span>

            <div className="flex-1 border-t border-white/20"></div>
          </div>

          {/* Login */}

          <p className="text-center text-gray-300 text-sm">
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