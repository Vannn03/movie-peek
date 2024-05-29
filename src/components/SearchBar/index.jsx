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
        <div className="flex w-full items-center justify-between gap-4 rounded bg-color-white px-8 py-4">
            <input
                type="text"
                placeholder="Search movie..."
                className="w-full bg-color-white text-xl text-color-primary outline-none"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <IoSearch className="text-3xl text-color-primary/35" />
        </div>
    )
}

export default SearchBar
