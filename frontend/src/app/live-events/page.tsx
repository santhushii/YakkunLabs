"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../globals.css";

export default function LiveEvents() {
  return (
    <div className="bg-gradient-to-r from-[#E3F2FD] via-[#64B5F6] to-[#283593] text-white min-h-screen">
      <Head>
        <title>YakkunLabs – Live Events</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-[#64B5F6] bg-opacity-95 backdrop-blur-md z-50">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">YakkunLabs - LIVE EVENTS</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-[#FF8C00]">Home</a></li>
          <li><a href="/lore" className="hover:text-[#FF8C00]">Lore</a></li>
          <li><a href="/community" className="hover:text-[#FF8C00]">Community</a></li>
          <li><a href="/social" className="hover:text-[#FF8C00]">Social</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-10">
        <motion.h1
          className="text-6xl font-extrabold text-[#FFD700] drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Exclusive Live Events
        </motion.h1>
        <p className="mt-4 text-2xl text-[#1A1A1A]">
          Participate in thrilling live events, earn rewards, and join the community fun!
        </p>
      </section>

      {/* Community Event Section */}
      <section className="py-16 px-10 flex flex-col md:flex-row items-center">
        <Image
          src="/images/community-event.jpg"
          alt="Community Event"
          width={600}
          height={350}
          className="rounded-lg shadow-lg"
        />
        <div className="md:ml-10 text-left">
          <h2 className="text-5xl font-bold text-[#FFD700]">Community Events</h2>
          <p className="mt-4 text-lg text-[#E0E0E0]">
            Immerse yourself in our exciting Community Events and reap fantastic rewards! Follow us on X/Twitter and actively engage with our posts—
            <span className="font-bold text-[#FFD700]"> Like, Repost, and Comment</span> to secure your chance to receive exclusive SHARD airdrops.
          </p>
          <button className="mt-6 bg-[#FFD700] hover:bg-[#FFC107] text-black px-6 py-3 rounded-lg text-lg shadow-lg">
            Get Involved Today!
          </button>
        </div>
      </section>

      {/* Tickets Event Section */}
      <section className="py-16 px-10 flex flex-col md:flex-row items-center bg-[#283593] bg-opacity-80">
        <div className="md:mr-10 text-left">
          <h2 className="text-5xl font-bold text-[#FFD700]">Tickets Event</h2>
          <p className="mt-4 text-lg text-[#E0E0E0]">
            Don’t miss out on this limited-time opportunity to get the powerful Trainer Klue! Use different ticket types to maximize your chances:
          </p>
          <ul className="mt-4 text-lg list-disc pl-5">
            <li><span className="font-bold text-[#FFD700]">Silver Ticket:</span> Redeem for 1 pull in the Limited-Time Banner.</li>
            <li><span className="font-bold text-[#FFD700]">Golden Ticket:</span> Use for 10 pulls, boosting chances.</li>
            <li><span className="font-bold text-[#FFD700]">Magical Ticket:</span> Guarantees you’ll get a Klue from the event.</li>
          </ul>
          <button className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg cursor-not-allowed">
            Concluded – Look Forward to the Game Launch!
          </button>
        </div>
        <Image
          src="/images/ticket-event.jpg"
          alt="Tickets Event"
          width={600}
          height={350}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Red Packet Event Section */}
      <section className="py-16 px-10 flex flex-col md:flex-row items-center">
        <Image
          src="/images/red-packet-event.jpg"
          alt="Red Packet Event"
          width={600}
          height={350}
          className="rounded-lg shadow-lg"
        />
        <div className="md:ml-10 text-left">
          <h2 className="text-5xl font-bold text-[#FFD700]">Red Packet Event</h2>
          <p className="mt-4 text-lg text-[#E0E0E0]">
            Get ready to mint your very own limited-edition Red Packets and reserve your in-game name! 
            Each packet provides you with valuable in-game resources.
          </p>
          <p className="mt-2 text-lg text-[#E0E0E0]">
            Special <span className="font-bold text-[#FFD700]">Youking Red Packets</span> hold potential for extra surprise rewards!
            Don’t miss your chance to secure exclusive perks and bonuses.
          </p>
          <button className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg cursor-not-allowed">
            Concluded – Look Forward to the Game Launch!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-[#283593] text-[#E0E0E0]">
        <p>© 2025 YakkunLabs | All Rights Reserved</p>
      </footer>
    </div>
  );
}
