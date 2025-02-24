"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import Next.js router
import "../globals.css";

export default function Lore() {
  const router = useRouter(); // Initialize router

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Explore the Game Universe</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#3A3D56] bg-opacity-95 backdrop-blur-lg shadow-md z-50">
        <h1 className="text-4xl font-extrabold text-[#FFD700] tracking-wider">
          YakkunLabs - LORE
        </h1>
        <ul className="flex gap-8 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00] transition-all">Home</a></li>
          <li><a href="/explore" className="hover:text-[#FF8C00] transition-all">Explore</a></li>
          <li><a href="/more" className="hover:text-[#FF8C00] transition-all">More</a></li>
          <li><a href="/social" className="hover:text-[#FF8C00] transition-all">Community</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen text-center px-10">
        <motion.div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: "url('/images/img_09.jpg')" }} // Background Image
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
            Explore the Fate World
          </h1>
          <p className="mt-4 text-2xl text-[#E0E0E0]">
            Journey through ancient mysteries, hidden artifacts, and deep lore.
          </p>
          <button 
            onClick={() => router.push("/explore")}
            className="mt-6 bg-[#FF8C00] hover:bg-[#D17800] px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all"
          >
            🔍 Start Exploring
          </button>
        </motion.div>
      </section>

      {/* Lore Highlights Section */}
      <motion.section
        className="py-20 text-center bg-[#1A1A2E] bg-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl font-bold text-[#FFD700] drop-shadow-md">🌌 Unravel the Legends</h2>
        <p className="mt-4 text-xl text-[#E0E0E0]">
          Dive into immersive storytelling, character bios, and stunning concept art.
        </p>

        {/* Lore Cards */}
        <div className="flex justify-center gap-6 mt-10">
          {/* Card 1 */}
          <motion.div 
            className="bg-[#283593] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <Image src="/images/img_10.jpg" alt="Fate Consensus" width={300} height={200} className="rounded-lg"/>
            <h3 className="mt-3 text-xl font-bold">Fate Consensus</h3>
            <p className="text-sm text-[#E0E0E0]">
              A mysterious force guiding civilizations toward perfection or destruction.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="bg-[#283593] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <Image src="/images/img_11.jpg" alt="Ancient Legends" width={300} height={200} className="rounded-lg"/>
            <h3 className="mt-3 text-xl font-bold">Ancient Legends</h3>
            <p className="text-sm text-[#E0E0E0]">
              Unravel the hidden stories of civilizations lost in time.
            </p>
          </motion.div>
        </div>

        <button
          onClick={() => router.push("/explore")}
          className="mt-10 bg-[#FF8C00] hover:bg-[#D17800] px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all"
        >
          🌍 Learn More
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 text-center bg-[#283593] text-[#E0E0E0] mt-10">
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
