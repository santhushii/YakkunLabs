"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../globals.css";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-[#F5F5F5] via-[#90CAF9] to-[#1E3A8A] text-white min-h-screen flex items-center justify-center">
      <Head>
        <title>YakkunLabs – Login / User Profile</title>
      </Head>

      <motion.div 
        className="bg-[#1E3A8A] p-10 rounded-lg shadow-lg w-96 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#FFD700]">Login</h2>
        <p className="mt-2 text-[#E0E0E0]">Access your profile and game stats.</p>
        
        {loading ? (
          <div className="flex flex-col items-center mt-6">
            <Image src="/images/loading.gif" alt="Loading" width={50} height={50} />
            <p className="mt-2 text-[#E0E0E0]">Logging in...</p>
          </div>
        ) : (
          <form className="mt-6">
            <input type="email" placeholder="Email" className="w-full p-2 rounded-md text-black" />
            <input type="password" placeholder="Password" className="w-full p-2 rounded-md mt-3 text-black" />
            <button 
              type="button"
              className="mt-4 w-full bg-[#FFD700] hover:bg-[#FFC107] text-black py-2 rounded-lg font-bold"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        )}
        
        <p className="mt-3 text-sm">
          <a href="#" className="text-[#90CAF9] hover:underline">Forgot Password?</a>
        </p>
        <p className="mt-3 text-sm">
          New User? <a href="#" className="text-[#FFD700] hover:underline">Register Here</a>
        </p>

        <div className="mt-5 flex justify-center gap-3">
          <button className="bg-[#DB4437] p-2 rounded-lg">Google</button>
          <button className="bg-[#7289DA] p-2 rounded-lg">Discord</button>
          <button className="bg-[#9146FF] p-2 rounded-lg">Twitch</button>
          <button className="bg-[#0F90F3] p-2 rounded-lg">Steam</button>
        </div>
      </motion.div>
    </div>
  );
}
