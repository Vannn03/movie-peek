'use client'

import { oswald } from '@/app/fonts'
import { getMovieResponse } from '@/libs/api-libs'
import { useCallback, useEffect, useState } from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'

const TrendingCarousel = ({ baseImgUrl, resource }) => {
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
            modules={[Autoplay, Navigation]}
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            navigation={{
                nextEl: '.btn-next',
                prevEl: '.btn-prev',
            }}
        >
            {data.map((value, index) => (
                <SwiperSlide key={value.id} className="relative">
                    <Image
                        src={`${baseImgUrl}${value.backdrop_path}`}
                        alt="..."
                        width={1900}
                        height={750}
                        className="h-[75dvh] w-full object-cover object-top"
                    />

                    <div className="absolute top-0 h-[75dvh] w-full bg-gradient-to-b from-color-primary/50 via-color-primary/50 to-color-primary" />

                    <div className="absolute left-6 top-6 border-l-4 border-color-accent px-4 py-2 md:left-8 md:top-8">
                        <p className="text-lg font-medium uppercase tracking-wide md:text-xl">
                            trending #{index + 1}
                        </p>
                    </div>

                    <div className="absolute top-1/2 mx-6 flex -translate-y-1/2 flex-col gap-6 sm:mx-12 sm:gap-8 md:mx-20 xl:w-[1000px]">
                        <h1
                            className={`${oswald.className} text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl`}
                        >
                            {value.title}
                        </h1>
                        <p className="text-lg text-color-white/75 md:text-xl">
                            {value.overview.length > 150
                                ? `${value.overview.slice(0, 150)}...`
                                : value.overview}
                        </p>
                        <Link href={`/detail/${value.id}`}>
                            <button className="w-fit rounded bg-color-accent px-12 py-4 font-medium uppercase tracking-wide md:text-lg lg:text-xl">
                                See detail
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
            <div className="absolute bottom-8 right-8 z-50 flex gap-4 text-4xl transition-colors md:text-5xl">
                <button className="btn-prev transition-colors hover:text-color-light-accent">
                    <FaCircleChevronLeft />
                </button>

                <button className="btn-next transition-colors hover:text-color-light-accent">
                    <FaCircleChevronRight />
                </button>
            </div>
        </Swiper>
    )
}

export default TrendingCarousel
