'use client'

import { oswald } from '@/app/fonts'
import {
    FaChevronRight,
    FaCircleChevronLeft,
    FaCircleChevronRight,
} from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'

const TrendingCarousel = ({ baseImgUrl, results }) => {
    const slicedData = results.slice(0, 10)

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
            {slicedData.map((value, index) => (
                <SwiperSlide key={value.id} className="relative">
                    <Image
                        src={`${baseImgUrl}${value.backdrop_path}`}
                        alt="..."
                        width={1900}
                        height={750}
                        className="h-[60dvh] w-full object-cover object-top sm:h-[75dvh]"
                    />

                    <div className="absolute top-0 h-[60dvh] w-full bg-gradient-to-b from-color-primary/50 via-color-primary/50 to-color-primary sm:h-[75dvh]" />

                    <div className="absolute left-6 top-6 border-l-4 border-color-accent px-4 py-1 md:left-12 md:top-12 md:py-2">
                        <p className="font-medium uppercase tracking-wide sm:text-lg md:text-xl">
                            trending #{index + 1}
                        </p>
                    </div>

                    <div className="absolute top-1/2 mx-6 flex -translate-y-1/2 flex-col gap-6 sm:mx-12 sm:gap-8 md:mx-20 lg:w-[800px]">
                        <h1
                            className={`${oswald.className} text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl`}
                        >
                            {value.title}
                        </h1>
                        <p className="text-color-white/75 sm:text-lg md:text-xl">
                            {value.overview.length > 125
                                ? `${value.overview.slice(0, 125)}...`
                                : value.overview}
                        </p>
                        <Link href={`/detail/${value.id}`}>
                            <button className="flex w-fit items-center gap-2 rounded-full bg-color-light-accent px-6 py-3 text-sm font-medium text-color-primary transition-all hover:brightness-105 sm:text-base md:text-lg lg:text-xl">
                                See detail{' '}
                                <FaChevronRight className="text-base" />
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
            <div className="absolute bottom-6 right-6 z-50 flex gap-4 text-4xl transition-colors sm:bottom-12 sm:right-12 md:text-5xl">
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
