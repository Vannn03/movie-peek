'use client'

import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const searchValue = searchRef.current.value

        if (!searchValue || searchValue.trim() === '') {
            return
        }

        if (event.key === 'Enter' || event.type === 'click') {
            event.preventDefault()
            router.push(`/search/${searchValue}`)
        }
    }

    return (
        <div
            className={`flex items-center justify-between gap-4 rounded-sm bg-color-white px-4 py-3`}
        >
            <input
                type="text"
                placeholder="Search movie..."
                className="w-80 bg-color-white text-sm text-color-primary outline-none sm:text-base "
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <IoSearch className="text-xl text-color-primary/35 sm:text-2xl" />
        </div>
    )
}

export default SearchBar