"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../globals.css"; 

export default function Explore() {
  return (
    <div className="relative bg-[#0A0A2A] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Explore the Unknown</title>
      </Head>

      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <Image
          src="/images/img_09.jpg"
          alt="Explore Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40 blur-lg"
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#0A0A2A] bg-opacity-95 shadow-lg">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs - EXPLORE</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00]">Lore</a></li>
          <li><a href="/more" className="hover:text-[#FF8C00]">More</a></li>
          <li><a href="/social" className="hover:text-[#FF8C00]">Community</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-10 pt-40">
        <motion.h1
          className="text-6xl font-extrabold text-[#FFD700] drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the Unknown
        </motion.h1>
        <p className="mt-4 text-2xl text-[#E0E0E0] max-w-3xl">
          Journey through ancient mysteries, hidden artifacts, and deep lore.
        </p>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 flex justify-center gap-10 mt-12">
        <motion.div
          className="bg-[#1E3A8A] text-[#FFD700] p-6 rounded-lg shadow-md w-1/4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold">Ancient Legends</h3>
          <p className="mt-2 text-[#E0E0E0] text-sm">
            Unravel the hidden stories of civilizations lost in time.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#1E3A8A] text-[#FFD700] p-6 rounded-lg shadow-md w-1/4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold">Secret Artifacts</h3>
          <p className="mt-2 text-[#E0E0E0] text-sm">
            Discover artifacts that hold the power of the universe.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="relative z-10 py-20 text-center bg-[#0A0A2A] bg-opacity-90 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl font-bold text-[#FFD700]">Start Your Journey</h2>
        <p className="mt-4 text-xl text-[#E0E0E0]">
          Unlock secrets, meet legendary beings, and rewrite history.
        </p>
        <button className="mt-6 bg-[#FFD700] hover:bg-[#FFC107] px-8 py-4 rounded-lg text-lg font-bold text-black shadow-lg">
          BEGIN EXPLORATION
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center bg-[#0A0A2A] text-[#E0E0E0]">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
