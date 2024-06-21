'use client'

import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React from 'react'

const CollectionGridList = ({ collectionDB }) => {
    const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_IMG_URL

    return (
        <>
            {collectionDB.map((data) => (
                <div key={data.id} className="cursor-pointer">
                    <Link href={`/detail/${data.movieId}`}>
                        <CldImage
                            deliveryType="fetch"
                            src={`${baseImgUrl}${data.movieImage}`}
                            alt="..."
                            width={300}
                            height={500}
                            className="w-full"
                        />
                        <h1 className="mt-3 text-sm font-medium sm:text-base lg:text-lg">
                            {data.movieTitle.length > 24
                                ? `${data.movieTitle.slice(0, 24)}...`
                                : data.movieTitle}
                        </h1>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default CollectionGridList
