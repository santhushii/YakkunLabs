"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../globals.css";

export default function Social() {
  return (
    <div className="bg-gradient-to-r from-[#F8F9FA] via-[#6EC6FF] to-[#1E3A8A] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Join the Community</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#6EC6FF] bg-opacity-95 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs - SOCIAL</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00]">Lore</a></li>
          <li><a href="/more" className="hover:text-[#FF8C00]">More</a></li>
          <li><a href="#" className="hover:text-[#FF8C00]">Community</a></li>
          <li><a href="#" className="hover:text-[#FF8C00]">Live Events</a></li>
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
            Join the Community
          </motion.h1>
          <p className="mt-4 text-3xl text-[#E0E0E0]">
            Stay connected with live social updates, events, and discussions.
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
            src="/images/img_04.png"
            alt="Social Page Concept Art"
            width={850}
            height={500}
            className="rounded-lg shadow-lg opacity-90 object-contain"
          />
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 text-center bg-[#6EC6FF] bg-opacity-85"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl font-bold text-[#FFD700]">Join the YakkunLabs Community</h2>
        <p className="mt-4 text-xl text-[#E0E0E0]">
          Connect with other players, discuss game strategies, and stay updated on live events.
        </p>
        <button className="mt-6 bg-[#1E3A8A] hover:bg-[#102A6B] px-8 py-4 rounded-lg text-lg shadow-lg">
          Join Now
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 text-center bg-[#1E3A8A] text-[#E0E0E0]">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
