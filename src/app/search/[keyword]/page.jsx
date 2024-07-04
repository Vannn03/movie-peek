'use client'

import MovieGridList from '@/components/MovieGridList'
import Pagination from '@/components/Pagination'
import { getMovieResponse } from '@/libs/api-libs'
import { useCallback, useEffect, useState } from 'react'

const Page = ({ params: { keyword } }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])

    const fetchData = useCallback(async () => {
        const data = await getMovieResponse(
            'search/movie',
            `query=${keyword}&page=${currentPage}`
        )
        setData(data)
    }, [keyword, currentPage])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const decodedKeyword = decodeURI(keyword)

    return (
        <div className="bg-color-primary p-6">
            <p className="font-medium text-color-white/75 sm:text-lg">
                Search results for:{' '}
                <span className="italic">&apos;{decodedKeyword}&apos;</span>
            </p>

            <MovieGridList results={data.results} />

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                lastPage={data.total_pages}
            />
        </div>
    )
}

export default Page
