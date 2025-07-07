"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchButton({ onOpen, currentGradient }) {
  return (
    <button
      onClick={onOpen}
      className="relative p-2 rounded-lg hover:bg-accent/50 transition-all duration-200 hover:scale-105 group"
      aria-label="Search"
      title="Search (Ctrl+K)"
    >
      <div className="relative">
        <FiSearch className="w-5 h-5 text-primary transition-all duration-200 group-hover:scale-110" />
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${currentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
      </div>
      <div className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${currentGradient.replace('/10', '').replace('/5', '')} rounded-full animate-pulse opacity-75`}></div>
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${currentGradient} opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm`}></div>
    </button>
  );
} 