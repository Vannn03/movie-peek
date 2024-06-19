import { getMovieResponse } from '@/libs/api-libs'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa6'

const SideBar = ({ pathname, toggleNav, setToggleNav }) => {
    const handleActiveNav = (route) => {
        return pathname !== route ? 'text-color-white/75' : 'font-medium'
    }

    const [data, setData] = useState([])

    const fetchData = async () => {
        const { genres } = await getMovieResponse('/genre/movie/list', '')
        setData(genres)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <aside
            className={`${toggleNav ? 'left-0' : '-left-80'} fixed top-0 z-50 flex h-full w-72 flex-col gap-4 bg-color-secondary py-6 transition-all`}
        >
            <div
                className="flex cursor-pointer justify-end pr-6"
                onClick={() => setToggleNav(false)}
            >
                <FaChevronLeft className="text-xl sm:text-2xl" />
            </div>
            <nav className="hide-scrollbar flex h-full flex-col overflow-y-scroll">
                <Link
                    href={'/'}
                    className={`border-b border-color-white/25 px-6 py-4 transition-colors hover:text-color-light-accent ${handleActiveNav('/')}`}
                >
                    Home
                </Link>
                <div className="border-b border-color-white/25">
                    <div
                        className={`${handleActiveNav('/genres')} flex cursor-default gap-2 px-6 py-4`}
                    >
                        Genres
                    </div>
                    <div className="grid grid-cols-2 border-color-white/25 pb-3">
                        {data.map((value) => (
                            <Link
                                key={value.id}
                                href={`/genres/${value.id}/${value.name.toLowerCase()}`}
                            >
                                <p
                                    className={`px-6 py-3 text-sm transition-colors hover:text-color-light-accent ${handleActiveNav(`/genres/${value.id}/${value.name.toLowerCase()}`)}`}
                                >
                                    {value.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
                <Link
                    href={'/users/dashboard'}
                    className={`border-b border-color-white/25 px-6 py-4 transition-colors hover:text-color-light-accent ${handleActiveNav('/users/dashboard')}`}
                >
                    My Account
                </Link>
            </nav>
        </aside>
    )
}

export default SideBar
