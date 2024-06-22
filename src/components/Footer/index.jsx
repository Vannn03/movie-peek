'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    const pathname = usePathname()

    return (
        <>
            {!pathname.includes('/signin') && !pathname.includes('/signout') ? (
                <footer className="flex flex-col items-center justify-between gap-4 border-t-2 border-color-light-accent bg-color-footer p-6 sm:flex-row md:p-12">
                    <div className="flex gap-4 text-4xl">
                        <FaInstagram className="cursor-pointer rounded-md border border-color-white/35 p-2 transition-colors hover:border-color-light-accent" />
                        <FaYoutube className="cursor-pointer rounded-md border border-color-white/35 p-2 transition-colors hover:border-color-light-accent" />
                        <FaTiktok className="cursor-pointer rounded-md border border-color-white/35 p-2 transition-colors hover:border-color-light-accent" />
                    </div>
                    <div className="hidden lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
                        <Image
                            src={'/tab-icon.svg'}
                            alt="..."
                            width={75}
                            height={75}
                        />
                    </div>
                    <p className="text-center text-sm text-color-white/75 sm:text-base">
                        © 2024 Movie Peek. All rights reserved.
                    </p>
                </footer>
            ) : null}
        </>
    )
}

export default Footer
