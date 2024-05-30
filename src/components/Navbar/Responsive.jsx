import { getMovieResponse } from '@/libs/api-libs'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Responsive = ({ pathname, FaChevronDown, toggleNav }) => {
    const [genreHover, setGenreHover] = useState(false)

    const handleActiveNav = (route) => {
        return pathname !== route
            ? 'text-color-white/75'
            : 'bg-color-light-accent'
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
        <nav
            className={`${toggleNav ? 'flex' : 'hidden'} fixed w-full flex-col bg-color-primary transition-all lg:hidden`}
        >
            <Link
                href={'/'}
                className={`px-6 py-4 hover:bg-color-secondary ${handleActiveNav('/')}`}
            >
                Home
            </Link>
            <Link
                href={'/movies'}
                className={`px-6 py-4 hover:bg-color-secondary ${handleActiveNav('/movies')}`}
            >
                Movies
            </Link>

            <div
                className={`${handleActiveNav('/genres')} flex cursor-default items-center justify-between gap-2 px-6 py-4 hover:bg-color-secondary`}
                onClick={() => setGenreHover((prev) => !prev)}
            >
                Genres
                <FaChevronDown className="w-4" />
            </div>
            {/* Genre Hover */}
            <div
                className={`grid grid-cols-3 border-b-2 border-color-white/25 text-color-white/75 md:grid-cols-5 ${genreHover ? 'grid' : 'hidden'}`}
            >
                {data.map((value) => (
                    <Link
                        key={value.id}
                        href={`/genres/${value.id}/${value.name.toLowerCase()}`}
                    >
                        <p
                            className={`px-4 py-3 text-sm transition-colors hover:bg-color-secondary ${pathname === `/genres/${value.id}/${value.name.toLowerCase()}` && 'bg-color-light-accent text-color-white'}`}
                        >
                            {value.name}
                        </p>
                    </Link>
                ))}
            </div>

            <Link
                href={'/collections'}
                className={`px-6 py-4 hover:bg-color-secondary ${handleActiveNav('/collections')}`}
            >
                Collections
            </Link>
            <Link
                href={'/search'}
                className={`px-6 py-4 hover:bg-color-secondary ${
                    !pathname.includes('/search')
                        ? 'text-color-white/75'
                        : 'bg-color-light-accent'
                }`}
            >
                Search
            </Link>
            <Link
                href={'/sign-up'}
                className={`px-6 py-4 ${handleActiveNav('/collections')} cursor-not-allowed opacity-50`}
            >
                Sign Up
            </Link>
        </nav>
    )
}

export default Responsive
