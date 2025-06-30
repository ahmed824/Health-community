"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/constants";
import Image from "next/image";
import { FiChevronDown, FiLogOut, FiSettings } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
const Logo = "/logo.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className=" z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left side - Burger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        className="p-2"
                    >
                        <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1H39" stroke="#076A60" strokeWidth="2" strokeLinecap="round" />
                            <path d="M1 9H31" stroke="#076A60" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>

                    {/* Logo - Centered */}
                    <Link href="/" className="flex mt-11 items-center justify-center relative p-12 logo-container">
                        <Image
                            src={Logo}
                            alt="Health Community Logo"
                            width={122}
                            height={94}
                            priority
                        />
                    </Link>

                    {/* Right side - Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent transition-colors"
                            aria-label="Profile menu"
                        >
                            <GoPerson className="w-5 h-5 text-primary" />
                            <FiChevronDown className={`w-4 h-4 text-primary transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Profile Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-background border rounded-md shadow-lg py-2 z-50">
                                <Link
                                    href="/profile"
                                    className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                    onClick={() => setIsProfileOpen(false)}
                                >
                                    <FiSettings className="w-4 h-4" />
                                    <span>Settings</span>
                                </Link>
                                <button
                                    onClick={() => {
                                        // Handle logout logic here
                                        setIsProfileOpen(false);
                                    }}
                                    className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors w-full text-left"
                                >
                                    <FiLogOut className="w-4 h-4" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>



            {/* Mobile Navigation - Full screen overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="flex flex-col h-full">
                        {/* Header with close button */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                                <Image
                                    src={Logo}
                                    alt="Health Community Logo"
                                    width={32}
                                    height={32}
                                />
                                <span className="font-semibold text-lg">Health Community</span>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                                className="p-2"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#076A60" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M6 6L18 18" stroke="#076A60" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 flex flex-col justify-center items-center space-y-8 p-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}

                            {/* CTA Buttons */}
                            <div className="flex flex-col space-y-4 pt-8">
                                <Link
                                    href="/login"
                                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
} 