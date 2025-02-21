"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#E0E0E0] via-[#5A9BD5] to-[#6A0DAD] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Crafting the Future of Gaming</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#5A9BD5] bg-opacity-90 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00]">Lore</a></li> 
          <li><a href="#" className="hover:text-[#FF8C00]">More</a></li>
          <li><a href="#" className="hover:text-[#FF8C00]">Social</a></li>
          <li><a href="#" className="hover:text-[#FF8C00]">Buy</a></li>
          <li><a href="#" className="hover:text-[#FF8C00]">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-row items-center justify-between h-screen px-16">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <Image
            src="/images/img_01.png"
            alt="YakkunLabs Feature"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        {/* Right Side - Text Content */}
        <div className="w-1/2 text-left">
          <motion.h1
            className="text-7xl font-extrabold drop-shadow-lg text-[#FFD700]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to YakkunLabs
          </motion.h1>
          <p className="mt-4 text-3xl text-[#1A1A1A]">
            Explore, Collect, and Dive into the BEANZ Universe!
          </p>
          <div className="mt-6 flex gap-6">
            <button className="bg-[#5A9BD5] hover:bg-[#4178B5] px-8 py-4 rounded-lg text-lg shadow-lg">🎮 Play Now</button>
            <button className="bg-[#6A0DAD] hover:bg-[#530A8A] px-8 py-4 rounded-lg text-lg shadow-lg">🛒 Explore Store</button>
            <button className="bg-[#E0E0E0] hover:bg-[#c8c8c8] px-8 py-4 rounded-lg text-lg shadow-lg text-black">🔑 Login</button>
          </div>
        </div>
      </section>

      {/* Featured Game Section */}
      <motion.section
        className="py-20 text-center bg-[#5A9BD5] bg-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl font-bold text-[#FFD700]">Featured Game</h2>
        <p className="mt-4 text-xl text-[#1A1A1A]">
          Discover the latest gaming experiences in the BEANZ universe.
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 text-center bg-[#6A0DAD] text-[#E0E0E0]">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
