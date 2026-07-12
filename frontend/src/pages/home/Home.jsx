import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'


const Home = () => {
  return (
    /* 1. Full-screen wrapper that displays the background image properly */
    <div 
      className="relative min-h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')", // Looks directly into the public folder
      }}
    >
      {/* 2. Dark overlay to make text highly readable over the bright sunset background */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>

      {/* 3. Your Sunset glassmorphism container centered perfectly */}
      <div className="relative z-10 flex sm:h-[450px] md:h-[550px] w-full max-w-4xl mx-4 rounded-xl overflow-hidden bg-amber-950/15 backdrop-filter backdrop-blur-xl border border-orange-500/20 shadow-2xl">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home