"use client";

import { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <FiMail className="w-5 h-5 text-white" />
        <h3 className="font-semibold capitalize text-xl text-white">subscribe to our news letter</h3>
      </div>

      <p className="text-sm capitalize text-[#B7D3D1] mb-4 whitespace-nowrap">
        subscribe now to get all the latest news
      </p>

      <form onSubmit={handleSubscribe} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 pr-12 bg-[#0E6E65] border border-transparent rounded-full text-white placeholder-[#B7D3D1] focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
            disabled={isSubscribing}
          />
          <button
            type="submit"
            disabled={isSubscribing || !email}
            className="absolute right-2 cursor-pointer top-1/2 z-20 transform -translate-y-1/2 p-2 bg-white hover:bg-white/80 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubscribing ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <FiSend className="w-4 h-4 text-primary" />
            )}
          </button>
        </div>

        {isSubscribed && (
          <div className="text-sm text-green-300 bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-2">
            ✓ Successfully subscribed! Welcome to our community.
          </div>
        )}
      </form>
    </div>
  );
}
