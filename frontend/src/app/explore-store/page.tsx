"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../globals.css";

export default function ExploreStore() {
  return (
    <div className="bg-gradient-to-r from-[#F5F5F5] via-[#90CAF9] to-[#1E3A8A] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Explore Store</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#1E3A8A] bg-opacity-95 backdrop-blur-md z-50">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs - STORE</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00]">Lore</a></li>
          <li><a href="/more" className="hover:text-[#FF8C00]">More</a></li>
          <li><a href="/social" className="hover:text-[#FF8C00]">Community</a></li>
          <li><a href="/buy" className="hover:text-[#FF8C00]">Buy</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/images/img_10.jpg"
          alt="Store Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <motion.h1
          className="text-7xl font-extrabold drop-shadow-lg text-[#FFD700] relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore the Store
        </motion.h1>
        <p className="mt-4 text-3xl text-[#E0E0E0] relative">
          Find exclusive skins, collectibles, and limited edition items.
        </p>
      </section>

      {/* Store Items Section */}
      <section className="py-20 px-16 bg-[#1E3A8A] bg-opacity-90 text-white">
        <h2 className="text-5xl font-bold text-center text-[#FFD700]">Featured Items</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Item 1 */}
          <div className="flex items-center bg-white text-black rounded-lg p-6 shadow-lg">
            <Image src="/images/img_11.jpg" alt="Item 1" width={200} height={200} className="rounded-lg" />
            <div className="ml-6">
              <h3 className="text-2xl font-bold">Legendary Warrior Skin</h3>
              <p className="mt-2">Unlock the exclusive battle-ready armor for your character.</p>
              <button className="mt-4 bg-[#FFD700] hover:bg-[#FFC107] text-black px-6 py-3 rounded-lg font-bold">
                Buy Now
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center bg-white text-black rounded-lg p-6 shadow-lg">
            <Image src="/images/img_12.jpg" alt="Item 2" width={200} height={200} className="rounded-lg" />
            <div className="ml-6">
              <h3 className="text-2xl font-bold">Limited Edition Art Book</h3>
              <p className="mt-2">A high-quality collector’s book featuring in-game artwork and lore.</p>
              <button className="mt-4 bg-[#FFD700] hover:bg-[#FFC107] text-black px-6 py-3 rounded-lg font-bold">
                Buy Now
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center bg-white text-black rounded-lg p-6 shadow-lg">
            <Image src="/images/img_13.jpg" alt="Item 3" width={200} height={200} className="rounded-lg" />
            <div className="ml-6">
              <h3 className="text-2xl font-bold">Exclusive In-Game Mount</h3>
              <p className="mt-2">Ride in style with a rare creature mount available for a limited time.</p>
              <button className="mt-4 bg-[#FFD700] hover:bg-[#FFC107] text-black px-6 py-3 rounded-lg font-bold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 text-center bg-[#90CAF9] bg-opacity-85"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl font-bold text-[#1E3A8A]">Limited Edition Drops</h2>
        <p className="mt-4 text-xl text-[#1A1A1A]">
          Pre-order exclusive skins, collectibles, and time-sensitive game expansions.
        </p>
        <button className="mt-6 bg-[#1E3A8A] hover:bg-[#0F265F] px-8 py-4 rounded-lg text-lg shadow-lg text-white">
          View Collection
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 text-center bg-[#1E3A8A] text-[#E0E0E0]">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
