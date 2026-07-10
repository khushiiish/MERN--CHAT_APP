import React from "react";

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl">
        <h1 className="text-white text-3xl font-bold">Login</h1>
      </div>
    </div>
  );
};

export default Login;