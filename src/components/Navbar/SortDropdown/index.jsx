import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

const SortDropdown = ({ customPosition }) => {
    const router = useRouter()
    const [dropdown, setDropdown] = useState(false)
    const [activeValue, setActiveValue] = useState('')

    const handleSortChange = (value, name) => {
        router.push(`/filter/${value}`)
        setDropdown(false)
        setActiveValue(name)
    }

    const options = [
        {
            value: 'popularity.desc',
            name: 'Popularity',
        },
        {
            value: 'vote_average.desc',
            name: 'Rating',
        },
        {
            value: 'primary_release_date.desc',
            name: 'Release Date',
        },
    ]

    return (
        <div className="relative">
            <div
                className="flex w-36 cursor-pointer items-center justify-between rounded-lg border border-color-white/35 bg-color-secondary px-3 py-3 sm:w-40 sm:px-4"
                onClick={() => setDropdown((prev) => !prev)}
            >
                <p className="text-sm text-color-white/50 sm:text-base">
                    {activeValue !== '' ? activeValue : 'Sort by'}
                </p>
                <span className="border-l border-color-white/35 pl-2">
                    <FaChevronDown className="text-xs text-color-white sm:text-sm" />
                </span>
            </div>

            <div
                className={`absolute ${customPosition} w-36 rounded-sm bg-color-secondary transition-all sm:w-40 ${dropdown ? 'pointer-events-auto top-16 opacity-100' : 'pointer-events-none top-12 opacity-0'}`}
            >
                {options.map((data, index) => (
                    <div
                        key={index}
                        className="cursor-pointer rounded-sm px-3 py-3 transition-colors hover:bg-color-light-accent sm:px-4"
                        onClick={() => handleSortChange(data.value, data.name)}
                    >
                        <p className="text-sm sm:text-base">{data.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SortDropdown
