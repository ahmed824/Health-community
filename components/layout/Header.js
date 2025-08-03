"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import SearchButton from "./SearchButton";
import SearchModal from "./SearchModal";
import MobileNavigation from "./MobileNavigation";
import ProfileDropdown from "./ProfileDropdown";

const Logo = "/logo.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [modalGradient, setModalGradient] = useState(1);

    // Generate dynamic gradient colors
    const gradients = [
        'from-blue-500/10 via-purple-500/5 to-pink-500/10',
        'from-green-500/10 via-teal-500/5 to-cyan-500/10',
        'from-orange-500/10 via-red-500/5 to-pink-500/10',
        'from-indigo-500/10 via-blue-500/5 to-purple-500/10',
        'from-emerald-500/10 via-green-500/5 to-teal-500/10'
    ];

    const currentGradient = gradients[modalGradient - 1];

    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
                setModalGradient(prev => prev % gradients.length + 1);
            }
        };

        document.addEventListener('keydown', handleGlobalKeyDown);
        return () => document.removeEventListener('keydown', handleGlobalKeyDown);
    }, [gradients.length]);

    const handleSearchOpen = () => {
        setIsSearchOpen(true);
        setModalGradient(prev => prev % gradients.length + 1);
    };

    const handleSearchClose = () => {
        setIsSearchOpen(false);
    };

    return (
        <header className="z-50 relative w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 pb-[50px] sm:px-6 lg:px-8 ">
                <div className="flex h-16 items-center justify-center md:justify-between ">
                    {/* Left side - Burger Menu */}
                    <div className="flex items-center space-x-2 mt-8">

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="p-2 hover:bg-accent/50 rounded-lg transition-all duration-200 hover:scale-105"
                        >
                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1H39" stroke="#076A60" strokeWidth="2" strokeLinecap="round" />
                                <path d="M1 9H31" stroke="#076A60" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <SearchButton onOpen={handleSearchOpen} currentGradient={currentGradient} />
                    </div>

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

                    {/* Right side - Search and Profile */}
                    <div className=" mt-8">
                        <ProfileDropdown />
                    </div>
                </div>
            </div>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={handleSearchClose}
                currentGradient={currentGradient}
            />
            <MobileNavigation
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

        </header>
    );
}