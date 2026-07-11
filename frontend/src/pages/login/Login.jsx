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

      {/* Glass Card - Scaled down to fit the 70% look */}
      <div
        className="
        relative
        z-10
        w-full
        max-w-[350px]
        rounded-[24px]
        bg-white/10
        backdrop-blur-2xl
        border border-white/20
        shadow-2xl
        px-6
        py-5
        "
      >
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <div className="w-11 h-11 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
            <FaComments className="text-cyan-300 text-xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-white">
          Welcome to{" "}
          <span className="text-cyan-400">
            ChatApp
          </span>
        </h1>

        <p className="text-center text-xs text-gray-300 mt-1 mb-4">
          Login to continue chatting with your friends.
        </p>

        {/* Username */}
        <div className="mb-3">
          <label className="text-white text-xs mb-1 block">
            Username
          </label>

          <div className="flex items-center rounded-lg bg-white/10 border border-white/20">
            <div className="px-3">
              <FaUser className="text-cyan-300 text-xs" />
            </div>

            <input
              type="text"
              placeholder="Enter Username"
              className="w-full py-1.5 pr-3 bg-transparent outline-none text-white text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="text-white text-xs mb-1 block">
            Password
          </label>

          <div className="flex items-center rounded-lg bg-white/10 border border-white/20">
            <div className="px-3">
              <FaLock className="text-cyan-300 text-xs" />
            </div>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full py-1.5 pr-3 bg-transparent outline-none text-white text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* Remember / Forgot */}
        <div className="flex justify-between items-center text-xs mb-4">
          <label className="flex items-center gap-1.5 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              className="accent-cyan-500 w-3.5 h-3.5 rounded"
            />
            Remember me
          </label>

          <button className="text-cyan-400 hover:text-cyan-300 font-medium">
            Forgot?
          </button>
        </div>

        {/* Login Button */}
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
          transition-all
          duration-300
          "
        >
          Login
          <FaArrowRight className="text-xs" />
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-white/20"></div>
          <span className="mx-3 text-xs text-gray-400">OR</span>
          <div className="flex-1 border-t border-white/20"></div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-300 text-xs">
          Don't have an account?{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline font-semibold">
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;