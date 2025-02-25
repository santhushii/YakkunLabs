"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../globals.css"; // Import global styles

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Password reset link sent to your email!");
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <Head>
        <title>Forgot Password - YakkunLabs</title>
      </Head>

      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <Image
          src="/images/forgot_bg.jpg" // Add your own image
          layout="fill"
          objectFit="cover"
          className="opacity-50 blur-md"
          alt="Forgot Password Background"
        />
      </div>

      {/* Forgot Password Form */}
      <motion.div
        className="relative z-10 bg-[#1E3A8A] bg-opacity-90 p-10 rounded-lg shadow-xl w-96 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-[#FFD700]">Forgot Password</h2>
        <p className="mt-2 text-[#E0E0E0]">
          Enter your email address to reset your password.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md text-black focus:outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="mt-4 w-full bg-[#FFD700] hover:bg-[#FFC107] text-black py-2 rounded-lg font-bold transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <p className="mt-3 text-sm">
          Remembered your password?{" "}
          <a
            onClick={() => router.push("/login")}
            className="text-[#90CAF9] hover:underline cursor-pointer"
          >
            Login here
          </a>
        </p>
      </motion.div>
    </div>
  );
}
