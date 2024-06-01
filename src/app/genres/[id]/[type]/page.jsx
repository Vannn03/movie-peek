'use client'

import MovieGridList from '@/components/MovieGridList'
import Pagination from '@/components/Pagination'
import { getMovieResponse } from '@/libs/api-libs'
import { useCallback, useEffect, useState } from 'react'

const Page = ({ params: { id, type } }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])

    const fetchData = useCallback(async () => {
        const { results } = await getMovieResponse(
            '/discover/movie',
            `with_genres=${id}&page=${currentPage}`
        )
        setData(results)
    }, [currentPage, id])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const decodedType = decodeURI(type)

    return (
        <div className="bg-color-primary p-6">
            <h1 className={`font-medium text-color-white/75 sm:text-lg`}>
                Genre type: <span className="italic">{decodedType}</span>
            </h1>

            <MovieGridList results={data} />

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                lastPage={500} // The data currently support 500 pages max
            />
        </div>
    )
}

export default Page
