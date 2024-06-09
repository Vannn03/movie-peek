'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import SortDropdown from './SortDropdown'
import SignButton from './SignButton'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [toggleSearch, setToggleSearch] = useState(false)
    const pathname = usePathname()

    return (
        <>
            <div
                className={`fixed top-0 z-50 h-dvh w-dvw bg-black/75 transition-colors ${
                    toggleNav ? 'flex' : 'hidden'
                }`}
                onClick={() => setToggleNav(false)}
            />
            <header className="sticky top-0 z-50 w-full">
                <SideBar
                    pathname={pathname}
                    toggleNav={toggleNav}
                    setToggleNav={setToggleNav}
                />
                <div className="flex items-center justify-between border-b border-color-white/35 bg-color-primary px-4 py-2 sm:px-12">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <HiOutlineMenu
                            className={`cursor-pointer text-2xl sm:text-3xl`}
                            onClick={() => setToggleNav(true)}
                        />
                        <Image
                            src={'/Logo.svg'}
                            alt="..."
                            width={200}
                            height={200}
                            className="w-32 sm:w-40 md:w-48"
                        />
                        <div className="hidden items-center gap-2 lg:flex">
                            <SearchBar customWidth={'w-80'} />
                            <SortDropdown customPosition={'top-[55px]'} />
                        </div>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 sm:gap-4">
                        <div
                            className="flex p-2 transition-colors hover:bg-color-secondary lg:hidden"
                            onClick={() => setToggleSearch((prev) => !prev)}
                        >
                            <IoSearch className="text-xl sm:text-2xl" />
                        </div>
                        <SignButton />
                    </div>
                </div>

                <div
                    className={`gap-2 bg-color-primary px-4 pb-2 sm:px-12 lg:hidden ${toggleSearch ? 'flex' : 'hidden'}`}
                >
                    <SearchBar customWidth={'w-full'} />
                    <SortDropdown
                        customPosition={
                            'top-[50px] sm:top-[54px] md:top-[55px]'
                        }
                    />
                </div>
            </header>
        </>
    )
}

export default Navbar
