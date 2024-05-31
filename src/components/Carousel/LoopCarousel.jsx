'use client'

import { getMovieResponse } from '@/libs/api-libs'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

const LoopCarousel = ({ baseImgUrl, resource }) => {
    const [data, setData] = useState([])

    const fetchData = useCallback(async () => {
        const movie = await getMovieResponse(resource, 'page=1')
        setData(movie.results)
    }, [resource])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={6}
            grabCursor={true}
            loop={true}
        >
            {data.map((value) => (
                <SwiperSlide
                    key={value.id}
                    className="min-w-40 cursor-pointer md:min-w-52 lg:min-w-64 xl:min-w-72"
                >
                    <Link href={`/detail/${value.id}`}>
                        <Image
                            src={`${baseImgUrl}${value.poster_path}`}
                            alt="..."
                            width={300}
                            height={500}
                            className="xl:w-fit"
                        />
                        <h1 className="mt-3 lg:text-lg">
                            {value.title.length > 30
                                ? `${value.title.slice(0, 30)}...`
                                : value.title}
                        </h1>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default LoopCarousel
