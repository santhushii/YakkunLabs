"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function Signup() {
  const router = useRouter(); // Initialize Router

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('/images/img_07.jpg')", // Background Image
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
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full p-2 rounded-md text-black focus:outline-none" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-2 rounded-md mt-3 text-black focus:outline-none" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 rounded-md mt-3 text-black focus:outline-none" 
          />
          <button 
            type="submit"
            className="mt-4 w-full bg-[#D4AF37] hover:bg-[#B8860B] text-black py-2 rounded-lg font-bold transition duration-300"
          >
            SIGN UP
          </button>
        </form>

        {/* Already have an account? */}
        <p className="mt-3 text-sm text-[#E0E0E0]">
          Already have an account?{" "}
          <a 
            className="text-[#FFD700] hover:underline cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login Here
          </a>
        </p>

        {/* Social Signup Buttons */}
        <div className="mt-5 flex justify-center gap-4">
          {/* Google Signup */}
          <button onClick={() => alert("Google Signup Clicked")}>
            <Image src="/images/google.png" alt="Google Signup" width={50} height={50} className="cursor-pointer hover:scale-110 transition" />
          </button>

          {/* Discord Signup */}
          <button onClick={() => alert("Discord Signup Clicked")}>
            <Image src="/images/discord.png" alt="Discord Signup" width={50} height={50} className="cursor-pointer hover:scale-110 transition" />
          </button>

          {/* Twitch Signup */}
          <button onClick={() => alert("Twitch Signup Clicked")}>
            <Image src="/images/twitch.png" alt="Twitch Signup" width={50} height={50} className="cursor-pointer hover:scale-110 transition" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
