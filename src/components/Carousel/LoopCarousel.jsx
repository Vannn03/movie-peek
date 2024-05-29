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
            loop={true}
            spaceBetween={35}
            slidesPerView={6}
            grabCursor={true}
        >
            {data.map((value, index) => (
                <SwiperSlide key={value.id} className="min-w-72 cursor-pointer">
                    <Link href={`/detail/${value.id}`}>
                        <Image
                            src={`${baseImgUrl}${value.poster_path}`}
                            alt="..."
                            width={1000}
                            height={1000}
                            className="w-fit rounded-xl"
                        />
                        <h1 className="mt-3 text-lg">
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
