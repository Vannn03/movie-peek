'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown, FaXmark } from 'react-icons/fa6'
import { BiCollection } from 'react-icons/bi'
import { IoSearch } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import GenrePopUp from '../GenrePopUp'
import { RiMenu4Fill } from 'react-icons/ri'
import Responsive from './Responsive'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [genreHover, setGenreHover] = useState(false)
    const pathname = usePathname()

    const handleActiveNav = (route) => {
        return pathname !== route && 'text-color-white/75'
    }

    return (
        <>
            <div
                className={`fixed top-0 z-50 h-dvh w-dvw bg-black/50 transition-colors lg:bg-transparent ${
                    toggleNav ? 'flex' : 'hidden'
                }`}
            />
            <header
                className={`${pathname !== '/' ? 'sticky' : 'fixed'} top-0 z-50 w-full`}
            >
                <div className="flex items-center justify-between border-b border-color-white/25 bg-color-primary px-6 py-4 sm:px-12 md:px-20 lg:py-0">
                    <Image
                        src={'/Logo.svg'}
                        alt="..."
                        width={200}
                        height={200}
                        className="w-24 sm:w-36 lg:w-fit"
                    />

                    <nav className="relative hidden gap-20 text-xl lg:flex">
                        <Link
                            href={'/'}
                            className={`py-10 ${handleActiveNav('/')}`}
                        >
                            Home
                        </Link>
                        <Link
                            href={'/movies'}
                            className={`py-10 ${handleActiveNav('/movies')}`}
                        >
                            Movies
                        </Link>
                        <div
                            className={`${handleActiveNav('/genres')} flex cursor-default items-center gap-2 py-10`}
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

                    <div className="hidden items-center gap-8 lg:flex">
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

                    {/* RESPONSIVE */}
                    <RiMenu4Fill
                        className={`flex cursor-pointer text-3xl sm:text-4xl lg:hidden ${toggleNav ? 'hidden' : 'flex'}`}
                        onClick={() => setToggleNav((prev) => !prev)}
                    />
                    <FaXmark
                        className={`flex cursor-pointer text-3xl sm:text-4xl lg:hidden ${toggleNav ? 'flex' : 'hidden'}`}
                        onClick={() => setToggleNav((prev) => !prev)}
                    />
                </div>

                <Responsive
                    pathname={pathname}
                    FaChevronDown={FaChevronDown}
                    toggleNav={toggleNav}
                />
            </header>
        </>
    )
}

export default Navbar
