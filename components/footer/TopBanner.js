import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Button from '../ui/Button';

export default function TopBanner() {
    return (
        <div className="w-full flex justify-center -translate-y-1/2 mb-[-2.5rem] z-10 relative">
            <div className="w-full max-w-[1140px] bg-[#EEF5F4]  relative   flex flex-col md:flex-row items-center justify-between px-14 py-8 md:py-20 gap-6 md:gap-0 rounded-[5px] border-gray-200">
                <Image
                    src="/images/decor-circle.png"
                    alt="Decorative Circle"
                    width={288}
                    height={200}
                    priority
                    className="w-auto h-full absolute top-0 left-0 pointer-events-none z-10"
                />
                <h2 className="text-[32px] md:text-3xl font-bold text-primary mb-2">Let&apos;s Make a Difference in Healthcare !</h2>


                <Button
                    variant="outline"
                    size="lg"
                    className="bg-[#076A60] text-white  mt-auto transition hover:shadow-lg"
                >
                    <Link
                        className="w-fit h-full flex items-center justify-center "
                        href="tel:+966123412312"
                    >
                        get started now
                    </Link>
                </Button>


                <span className="text-xl text-primary font-semibold flex items-center gap-2"> <LiaPhoneVolumeSolid /> +966 1234 123 12</span>

            </div>
        </div>
    )
}
