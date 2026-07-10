import React from "react";
import {
  FaUser,
  FaLock,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

const Login = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Glass Card */}
      <div
        className="
        relative
        z-10
        w-[430px]
        rounded-[30px]
        bg-white/10
        backdrop-blur-2xl
        border border-white/20
        shadow-2xl
        px-8
        py-7
        "
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
            <FaComments className="text-cyan-300 text-2xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-white">
          Welcome to{" "}
          <span className="text-cyan-400">
            ChatApp
          </span>
        </h1>

        <p className="text-center text-gray-300 mt-2 mb-6">
          Login to continue chatting with your friends.
        </p>

        {/* Username */}
        <div className="mb-4">
          <label className="text-white text-sm mb-2 block">
            Username
          </label>

          <div className="flex items-center rounded-xl bg-white/10 border border-white/20">
            <div className="px-4">
              <FaUser className="text-cyan-300" />
            </div>

            <input
              type="text"
              placeholder="Enter Username"
              className="w-full py-3 pr-4 bg-transparent outline-none text-white placeholder-gray-300"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-white text-sm mb-2 block">
            Password
          </label>

          <div className="flex items-center rounded-xl bg-white/10 border border-white/20">
            <div className="px-4">
              <FaLock className="text-cyan-300" />
            </div>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full py-3 pr-4 bg-transparent outline-none text-white placeholder-gray-300"
            />
          </div>
        </div>

        {/* Remember */}
        <div className="flex justify-between items-center text-sm mb-5">
          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              className="accent-cyan-500"
            />
            Remember me
          </label>

          <button className="text-cyan-400 hover:text-cyan-300">
            Forgot?
          </button>
        </div>

        {/* Login */}
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
          transition-all
          duration-300
          "
        >
          Login
          <FaArrowRight />
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-white/20"></div>

          <span className="mx-3 text-gray-300">
            OR
          </span>

          <div className="flex-1 border-t border-white/20"></div>
        </div>

        {/* Sign Up */}
        <p className="text-center text-gray-300 text-sm">
          Don't have an account?{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;