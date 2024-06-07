'use client'

import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = ({ customWidth }) => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const searchValue = searchRef.current.value

        if (!searchValue || searchValue.trim() === '') {
            return
        }

        if (event.key === 'Enter') {
            event.preventDefault()
            router.push(`/search/${searchValue}`)
        }
    }

    return (
        <div
            className={`flex w-full items-center justify-between gap-4 rounded-lg border border-color-white/35 px-3 py-3 sm:px-4`}
        >
            <input
                type="text"
                placeholder="Search movie..."
                className={`${customWidth} bg-transparent text-sm outline-none sm:text-base`}
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <IoSearch className="text-xl text-color-white/50 sm:text-2xl" />
        </div>
    )
}

export default SearchBar
