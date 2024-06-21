'use client'

import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

const LoopCarousel = ({ baseImgUrl, results }) => {
    const slicedData = results.slice(0, 12)

    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={6}
                grabCursor={true}
                breakpoints={{
                    // when window width is >= 640px
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                    },
                    1536: {
                        slidesPerView: 6,
                        spaceBetween: 25,
                    },
                }}
            >
                {slicedData.map((value) => (
                    <SwiperSlide key={value.id} className="cursor-pointer">
                        <Link href={`/detail/${value.id}`}>
                            <CldImage
                                deliveryType="fetch"
                                src={`${baseImgUrl}${value.poster_path}`}
                                alt="..."
                                width={300}
                                height={500}
                                className="w-fit"
                            />
                            <h1 className="mt-3 text-sm font-medium sm:text-base lg:text-lg">
                                {value.title.length > 24
                                    ? `${value.title.slice(0, 24)}...`
                                    : value.title}
                            </h1>
                        </Link>
                    </SwiperSlide>
                ))}
                <div className="absolute right-0 top-0 z-40 h-full w-20 bg-gradient-to-r from-black/0 via-color-primary/50 to-color-primary sm:w-28" />
            </Swiper>
        </>
    )
}

export default LoopCarousel
