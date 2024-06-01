'use client'

import MovieGridList from '@/components/MovieGridList'
import Pagination from '@/components/Pagination'
import { getMovieResponse } from '@/libs/api-libs'
import { useCallback, useEffect, useState } from 'react'
import { HiSortAscending, HiSortDescending } from 'react-icons/hi'

const Page = ({ params: { type } }) => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [sortOrder, setSortOrder] = useState(false) // false = desc

    const orderedType = useCallback(() => {
        return sortOrder
            ? type.replace('desc', 'asc')
            : type.replace('asc', 'desc')
    }, [sortOrder, type])

    const fetchData = useCallback(async () => {
        const data = await getMovieResponse(
            '/discover/movie',
            `sort_by=${orderedType()}&page=${currentPage}`
        )
        setData(data)
    }, [currentPage, orderedType])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className="bg-color-primary p-6">
            <div className="flex items-center justify-between">
                <p className="font-medium text-color-white/75 sm:text-lg">
                    Sort by:{' '}
                    <span className="italic">
                        {orderedType().split('.')[0]}
                    </span>
                </p>

                <button
                    className="flex items-center gap-2 rounded-full border border-color-light-accent px-3 py-2 text-color-light-accent sm:px-4 sm:py-3"
                    onClick={() => setSortOrder((prev) => !prev)}
                >
                    <span className="text-sm font-medium sm:text-base">
                        {sortOrder ? 'Descend' : 'Ascend'}
                    </span>
                    <span className="text-lg sm:text-xl">
                        {sortOrder ? <HiSortDescending /> : <HiSortAscending />}
                    </span>
                </button>
            </div>

            <MovieGridList results={data.results} />

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                lastPage={500}
            />
        </div>
    )
}

export default Page
