'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa6'
import { BiCollection } from 'react-icons/bi'
import { IoSearch } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import GenrePopUp from '../GenrePopUp'

const Navbar = () => {
    const [genreHover, setGenreHover] = useState(false)
    const pathname = usePathname()

    return (
        <header
            className={`${pathname !== '/' ? 'sticky' : 'fixed'} top-0 z-50 w-full`}
        >
            <div className="flex items-center justify-between border-b border-color-white/25 bg-color-primary px-20">
                <Image
                    src={'/Logo.svg'}
                    alt="..."
                    width={200}
                    height={200}
                    className="w-fit"
                />

                <nav className="relative flex gap-20 text-xl">
                    <Link
                        href={'/'}
                        className={`py-10 ${pathname !== '/' && 'text-color-white/75'}`}
                    >
                        Home
                    </Link>
                    <Link
                        href={'/movies'}
                        className={`py-10 ${pathname !== '/movies' && 'text-color-white/75'}`}
                    >
                        Movies
                    </Link>
                    <div
                        className={`${pathname !== '/genres' && 'text-color-white/75'} flex cursor-default items-center gap-2 py-10`}
                        onMouseEnter={() => setGenreHover(true)}
                        onMouseLeave={() => setGenreHover(false)}
                    >
                        Genres
                        <FaChevronDown className="w-4" />
                        {/* HOVER GENRE */}
                        <GenrePopUp
                            genreHover={genreHover}
                            pathname={pathname}
                        />
                    </div>

                    <div
                        className={`absolute bottom-0 w-24 border-2 border-color-light-accent drop-shadow-nav-line transition-transform ${pathname === '/' ? '-translate-x-[22px]' : pathname === '/movies' ? 'translate-x-[118px]' : 'border-none'}`}
                    />
                </nav>

                <div className="flex items-center gap-8">
                    <Link href={'/collections'}>
                        <BiCollection
                            className={`text-3xl transition-colors ${pathname === '/collection' ? 'text-color-accent' : 'text-color-white/75'}`}
                        />
                    </Link>
                    <Link href={'/search'}>
                        <IoSearch
                            className={`text-3xl transition-colors ${pathname.includes('/search') ? 'text-color-accent' : 'text-color-white/75'}`}
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar
