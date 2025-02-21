"use client"; // Ensure this is at the top

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Crafting the Future of Gaming</title>
      </Head>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to YakkunLabs
        </motion.h1>
        <p className="mt-4 text-xl text-gray-400">Explore, Collect, and Dive into the BEANZ Universe!</p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-lg">🎮 Play Now</button>
          <button className="bg-red-600 px-6 py-3 rounded-lg text-lg">🛒 Explore Store</button>
          <button className="bg-purple-600 px-6 py-3 rounded-lg text-lg">🔑 Login</button>
        </div>
      </section>

      {/* Featured Game Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">Featured Game</h2>
        <p className="mt-4 text-gray-400">Discover the latest gaming experiences in the BEANZ universe.</p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-900">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
