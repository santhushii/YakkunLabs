"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import "../globals.css";

export default function PlayNow() {
  return (
    <div className="bg-gradient-to-r from-[#F5F5F5] via-[#90CAF9] to-[#1E3A8A] text-white min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>YakkunLabs – Play Now</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#1E3A8A] bg-opacity-90 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs - PLAY NOW</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00]">Lore</a></li>
          <li><a href="/more" className="hover:text-[#FF8C00]">More</a></li>
          <li><a href="/buy" className="hover:text-[#FF8C00]">Buy</a></li>
          <li><a href="/social" className="hover:text-[#FF8C00]">Community</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center mt-20 px-16 text-center">
        <motion.h1
          className="text-7xl font-extrabold drop-shadow-lg text-[#FFD700]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Play Now & Explore the Adventure!
        </motion.h1>
        <p className="mt-4 text-2xl text-[#E0E0E0]">
          Jump into the world of YakkunLabs and start your journey today.
        </p>
      </section>

      {/* YouTube Video Embed */}
      <section className="mt-10">
        <iframe
          className="w-[800px] h-[450px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/D3YvPSm2W_8"
          title="YakkunLabs Gameplay Trailer"
          allowFullScreen
        ></iframe>
      </section>

      {/* Game Description */}
      <section className="py-10 text-center bg-[#1E3A8A] bg-opacity-85 mt-10 px-10 rounded-lg">
        <h2 className="text-5xl font-bold text-[#FFD700]">Why Play YakkunLabs?</h2>
        <p className="mt-4 text-xl text-[#E0E0E0]">
          Experience a thrilling adventure with stunning visuals, immersive gameplay, and an expansive universe filled with mysteries. Join the battle, explore hidden secrets, and become a legend in the YakkunLabs world.
        </p>
        <button className="mt-6 bg-[#FFD700] hover:bg-[#FFC107] px-8 py-4 rounded-lg text-lg shadow-lg text-black font-bold">
          Start Playing
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-[#0F172A] text-[#E0E0E0] mt-10 w-full">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
