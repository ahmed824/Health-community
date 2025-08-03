import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Button from '../ui/Button';

export default function TopBanner() {
    return (
        <div className="w-full flex justify-center -translate-y-1/2 mb-[-2.5rem] z-10 relative px-2 sm:px-4 lg:px-6">
            <div className="w-full max-w-[1140px] bg-[#EEF5F4] relative flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-6 py-4 sm:py-6 md:py-10 lg:py-16 lg:px-10 gap-3 sm:gap-2 md:gap-0 rounded-[5px] border-gray-200">
                <Image
                    src="/images/decor-circle.png"
                    alt="Decorative Circle"
                    width={288}
                    height={200}
                    priority
                    className="w-auto h-full absolute top-0 left-0 pointer-events-none z-10 hidden sm:block"
                />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl max-w-[300px] lg:max-w-full font-bold text-primary mb-2 text-center md:text-left leading-tight">Let&apos;s Make a Difference in Healthcare !</h2>

                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full md:w-auto">
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-[#076A60] text-white transition hover:shadow-lg w-full sm:w-auto text-xs sm:text-sm md:text-base"
                    >
                        <Link
                            className="w-fit h-full flex items-center justify-center"
                            href="tel:+966123412312"
                        >
                            get started now
                        </Link>
                    </Button>

                    <span className="text-sm sm:text-base md:text-lg text-primary font-semibold flex items-center gap-2 text-center sm:text-left"> 
                        <LiaPhoneVolumeSolid className="text-base sm:text-lg" /> 
                        <span className="hidden sm:inline">+966 1234 123 12</span>
                        <span className="sm:hidden">+966 1234 123 12</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
