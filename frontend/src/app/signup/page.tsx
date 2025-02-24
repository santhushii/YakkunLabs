"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../globals.css";

export default function Signup() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('/images/img_07.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Apply Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

      <Head>
        <title>YakkunLabs – Sign Up</title>
      </Head>

      {/* Signup Box */}
      <motion.div 
        className="relative bg-[#2C2C2C] bg-opacity-90 p-10 rounded-lg shadow-lg w-96 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#FFD700]">Sign Up</h2>
        <p className="mt-2 text-[#E0E0E0]">Create your account to access exclusive content.</p>

        {/* Signup Form */}
        <form className="mt-6">
          <input type="text" placeholder="Username" className="w-full p-2 rounded-md text-black" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded-md mt-3 text-black" />
          <input type="password" placeholder="Password" className="w-full p-2 rounded-md mt-3 text-black" />
          <button 
            type="submit"
            className="mt-4 w-full bg-[#D4AF37] hover:bg-[#B8860B] text-black py-2 rounded-lg font-bold"
          >
            SIGN UP
          </button>
        </form>

        <p className="mt-3 text-sm text-[#E0E0E0]">
          Already have an account? <a href="/login" className="text-[#FFD700] hover:underline">Login Here</a>
        </p>

        {/* Social Login Buttons */}
        <div className="mt-5 flex justify-center gap-3">
          <button className="bg-[#8B0000] p-2 rounded-lg text-white">Google</button>
          <button className="bg-[#4F4F4F] p-2 rounded-lg text-white">Discord</button>
          <button className="bg-[#6A0DAD] p-2 rounded-lg text-white">Twitch</button>
          <button className="bg-[#0F90F3] p-2 rounded-lg text-white">Steam</button>
        </div>
      </motion.div>
    </div>
  );
}
