"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../globals.css"; 

export default function Social() {
  return (
    <div className="bg-gradient-to-r from-[#F0F4FF] via-[#6EC6FF] to-[#1E3A8A] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Join the Community</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#6EC6FF] bg-opacity-95 backdrop-blur-md z-50">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs - SOCIAL</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00]">Lore</a></li>
          <li><a href="/more" className="hover:text-[#FF8C00]">More</a></li>
          <li><a href="/community" className="hover:text-[#FF8C00]">Community</a></li>
          <li><a href="/events" className="hover:text-[#FF8C00]">Live Events</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-row items-center justify-between h-screen px-16 relative">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        {/* Left Side - Text Content */}
        <div className="w-1/2 text-left relative z-10">
          <motion.h1
            className="text-6xl font-extrabold drop-shadow-lg text-[#FFD700]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Connect, Engage & Stay Updated
          </motion.h1>
          <p className="mt-4 text-2xl text-white font-semibold">
            Join the YakkunLabs Community and be part of something bigger.
          </p>
        </div>
        
        {/* Right Side - Animated Character */}
        <motion.div 
          className="w-1/3 flex justify-end relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src="/images/img_06.png"
            alt="Social Page Character"
            width={400}
            height={500}
            className="rounded-lg shadow-lg opacity-90 object-contain"
          />
        </motion.div>
      </section>

      {/* Community Section */}
      <section className="py-20 text-center bg-[#1E3A8A] bg-opacity-85">
        <h2 className="text-4xl font-bold text-[#FFD700]">Join Our Active Community</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 px-16">
          {/* Interactive Community Features */}
          <motion.div 
            className="p-6 bg-[#6EC6FF] rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg font-semibold">🎮 Game Nights</p>
            <p className="mt-2 text-black">Compete in weekly events & win prizes!</p>
          </motion.div>

          <motion.div 
            className="p-6 bg-[#6EC6FF] rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg font-semibold">📢 Announcements</p>
            <p className="mt-2 text-black">Stay updated on new releases & features.</p>
          </motion.div>

          <motion.div 
            className="p-6 bg-[#6EC6FF] rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg font-semibold">🛠 Dev Diaries</p>
            <p className="mt-2 text-black">Behind-the-scenes insights from the dev team.</p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 text-center bg-[#6EC6FF]">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Upcoming Events</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-16">
          <motion.div 
            className="p-6 bg-white text-black rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-[#1E3A8A]">📅 Dev Q&A Live</h3>
            <p className="mt-2 text-lg">Join our developers for an exclusive Q&A session on March 25th.</p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white text-black rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-[#1E3A8A]">🎭 Community Cosplay Contest</h3>
            <p className="mt-2 text-lg">Submit your best cosplay and win exclusive in-game rewards! 🏆</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 text-center bg-[#1E3A8A] bg-opacity-85"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-bold text-[#FFD700]">Join the YakkunLabs Community</h2>
        <p className="mt-4 text-lg text-[#E0E0E0]">
          Connect with other players, discuss game strategies, and stay updated on live events.
        </p>
        <button 
          className="mt-6 bg-[#FFD700] hover:bg-[#E0C200] text-black px-6 py-3 rounded-lg text-lg shadow-lg"
        >
          Join Now
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 text-center bg-[#1E3A8A] text-[#E0E0E0]">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
