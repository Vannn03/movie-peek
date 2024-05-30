import { getMovieResponse } from '@/libs/api-libs'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const GenrePopUp = ({ genreHover, pathname }) => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const { genres } = await getMovieResponse('/genre/movie/list', '')
        setData(genres)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <span
            className={`absolute right-0 z-40 grid w-[500px] translate-x-[200px] grid-cols-3 bg-color-footer transition-all duration-300 ${genreHover ? 'visibility-visible pointer-events-auto top-20 opacity-100' : 'visibility-hidden pointer-events-none top-16 opacity-0'}`}
        >
            {data.map((value) => (
                <Link
                    key={value.id}
                    href={`/genres/${value.id}/${value.name.toLowerCase()}`}
                >
                    <p
                        className={`px-6 py-4 text-base transition-colors hover:bg-color-secondary ${pathname === `/genres/${value.id}/${value.name.toLowerCase()}` && 'bg-color-accent text-color-white'}`}
                    >
                        {value.name}
                    </p>
                </Link>
            ))}
        </span>
    )
}

export default GenrePopUp
