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

        if (event.key === 'Enter' || event.type === 'click') {
            event.preventDefault()
            router.push(`/search/${searchValue}`)
        }
    }

    return (
        <div
            className={`flex ${customWidth} items-center justify-between gap-4 rounded bg-color-white px-8 py-4`}
        >
            <input
                type="text"
                placeholder="Search movie..."
                className="w-full bg-color-white text-color-primary outline-none md:text-lg xl:text-xl"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <IoSearch className="text-2xl text-color-primary/35 md:text-3xl" />
        </div>
    )
}

export default SearchBar
