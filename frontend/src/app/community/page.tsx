"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../globals.css"; 

export default function Community() {
  return (
    <div className="bg-gradient-to-r from-[#B3E5FC] via-[#64B5F6] to-[#283593] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Community Hub</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#64B5F6] bg-opacity-95 backdrop-blur-md z-50">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs - COMMUNITY</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00]">Lore</a></li>
          <li><a href="/more" className="hover:text-[#FF8C00]">More</a></li>
          <li><a href="/social" className="hover:text-[#FF8C00]">Social</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24">
        <motion.h1
          className="text-6xl font-extrabold text-[#FFD700] drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Community Hub
        </motion.h1>
        <p className="mt-4 text-xl text-[#E0E0E0]">
          Connect with fellow players, share experiences, and stay engaged!
        </p>
      </section>

      {/* Community Characters */}
      <section className="px-16 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Community Character Cards */}
          {[
            { img: "/images/img_16.jpg", name: "Character 1" },
            { img: "/images/img_17.jpg", name: "Character 2" },
            { img: "/images/img_18.jpg", name: "Character 3" },
            { img: "/images/img_19.jpg", name: "Character 4" },
          ].map((character, index) => (
            <motion.div 
              key={index} 
              className="bg-white text-black rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={character.img}
                alt={character.name}
                width={250}
                height={350}
                className="rounded-lg object-cover"
              />
              <p className="text-center font-bold mt-2">{character.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 text-center bg-[#283593] bg-opacity-85"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-bold text-[#FFD700]">Discover More</h2>
        <p className="mt-4 text-lg text-[#E0E0E0]">
          Explore character backstories, game mechanics, and hidden lore.
        </p>
        <button className="mt-6 bg-[#FFD700] hover:bg-[#E0C200] text-black px-6 py-3 rounded-lg text-lg shadow-lg">
          More →
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 text-center bg-[#1E3A8A] text-[#E0E0E0]">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
