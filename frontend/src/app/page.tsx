"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import router for navigation
import "./globals.css";

export default function Home() {
  const router = useRouter(); // Initialize router

  return (
    <div className="bg-gradient-to-r from-[#1A1A2E] via-[#5A9BD5] to-[#6A0DAD] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Crafting the Future of Gaming</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#3A3D56] bg-opacity-95 backdrop-blur-lg shadow-md z-50">
        <h1 className="text-4xl font-extrabold text-[#FFD700] tracking-wider">
          YakkunLabs
        </h1>
        <ul className="flex gap-8 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00] transition-all">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00] transition-all">Lore</a></li> 
          <li><a href="/more" className="hover:text-[#FF8C00] transition-all">More</a></li>
          <li><a href="/social" className="hover:text-[#FF8C00] transition-all">Social</a></li>
          <li><a href="/buy" className="hover:text-[#FF8C00] transition-all">Buy</a></li>
          <li><a href="/login" className="hover:text-[#FF8C00] transition-all">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section with Background Wallpaper */}
      <section className="relative flex items-center justify-center min-h-screen text-center px-10">
        <motion.div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: "url('/images/img_14.jpg')" }} // Wallpaper Image
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="relative z-10 max-w-2xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl font-extrabold drop-shadow-lg text-[#FFD700]">
            Welcome to YakkunLabs
          </h1>
          <p className="mt-4 text-2xl text-[#E0E0E0]">
            Explore, Build, and Conquer in the Ultimate Gaming Universe!
          </p>
          <div className="mt-8 flex gap-6 justify-center">
            <button 
              onClick={() => router.push("/playnow")} // Navigate to Play Now page
              className="bg-[#FF8C00] hover:bg-[#D17800] px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all"
            >
              🎮 Play Now
            </button>
            <button 
              onClick={() => router.push("/explore-store")} // Navigate to Explore Store page
              className="bg-[#6A0DAD] hover:bg-[#530A8A] px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all"
            >
              🛒 Explore Store
            </button>
            <button 
              onClick={() => router.push("/login")} // Navigate to Login page
              className="bg-[#E0E0E0] hover:bg-[#c8c8c8] px-8 py-4 rounded-lg text-lg font-bold shadow-lg text-black transition-all"
            >
              🔑 Login
            </button>
          </div>
        </motion.div>
      </section>

      {/* Featured Game Section */}
      <motion.section
        className="py-20 text-center bg-[#1A1A2E] bg-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl font-bold text-[#FFD700] drop-shadow-md">🔥 Featured Games</h2>
        <p className="mt-4 text-xl text-[#E0E0E0]">
          Experience the next-gen world of gaming with cutting-edge visuals and immersive gameplay.
        </p>

        {/* Game Preview Cards */}
        <div className="flex justify-center gap-6 mt-10">
          {/* Card 1 */}
          <motion.div 
            className="bg-[#283593] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <Image src="/images/img_10.jpg" alt="Game 1" width={300} height={200} className="rounded-lg"/>
            <h3 className="mt-3 text-xl font-bold">Legend of Beanz</h3>
            <p className="text-sm text-[#E0E0E0]">Unleash the power of ancient warriors and mystical creatures.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="bg-[#283593] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <Image src="/images/img_11.jpg" alt="Game 2" width={300} height={200} className="rounded-lg"/>
            <h3 className="mt-3 text-xl font-bold">Cyber Realm</h3>
            <p className="text-sm text-[#E0E0E0]">A futuristic battle royale set in a neon-lit dystopia.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="bg-[#283593] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <Image src="/images/img_12.jpg" alt="Game 3" width={300} height={200} className="rounded-lg"/>
            <h3 className="mt-3 text-xl font-bold">Cosmic Chronicles</h3>
            <p className="text-sm text-[#E0E0E0]">Explore galaxies, conquer planets, and rewrite the universe.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 text-center bg-[#6A0DAD] text-[#E0E0E0] mt-10">
        <p className="text-lg">© 2025 YakkunLabs | All Rights Reserved</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-[#FFD700] transition-all">Twitter</a>
          <a href="#" className="hover:text-[#FFD700] transition-all">Discord</a>
          <a href="#" className="hover:text-[#FFD700] transition-all">YouTube</a>
        </div>
      </footer>
    </div>
  );
}
