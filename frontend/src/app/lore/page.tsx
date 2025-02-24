"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import Next.js router
import "../globals.css"; 

export default function Lore() {
  const router = useRouter(); // Initialize Next.js router

  return (
    <div className="bg-gradient-to-r from-[#E3F2FD] via-[#64B5F6] to-[#283593] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Explore the Game Universe</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#64B5F6] bg-opacity-95 backdrop-blur-md z-50">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs - LORE</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/explore" className="hover:text-[#FF8C00]">Explore</a></li>
          <li><a href="/more" className="hover:text-[#FF8C00]">More</a></li>
          <li><a href="/social" className="hover:text-[#FF8C00]">Community</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-row items-center justify-between h-screen px-16">
        {/* Left Side - Text Content */}
        <div className="w-1/2 text-left">
          <motion.h1
            className="text-7xl font-extrabold drop-shadow-lg text-[#FFD700]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Explore the Game Universe
          </motion.h1>
          <p className="mt-4 text-3xl text-[#1A1A1A]">
            Dive into immersive storytelling, character bios, and stunning concept art.
          </p>
        </div>
        
        {/* Right Side - Animated Image */}
        <motion.div 
          className="w-1/2 flex justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src="/images/img_02.png"
            alt="Lore Concept Art"
            width={800}
            height={500}
            className="rounded-lg shadow-lg opacity-90 object-contain"
          />
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 text-center bg-[#64B5F6] bg-opacity-85"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl font-bold text-[#FFD700]">Uncover More</h2>
        <p className="mt-4 text-xl text-[#E0E0E0]">
          Discover hidden lore, explore cutscenes, and learn about your favorite characters.
        </p>
        <button
          className="mt-6 bg-[#283593] hover:bg-[#1A237E] px-8 py-4 rounded-lg text-lg shadow-lg"
          onClick={() => router.push("/explore")}
        >
          Explore More
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 text-center bg-[#283593] text-[#E0E0E0]">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
