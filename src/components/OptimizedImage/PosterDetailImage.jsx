'use client'

import { CldImage } from 'next-cloudinary'
import { MdImageNotSupported } from 'react-icons/md'

const PosterDetailImage = ({ detail, baseImgUrl }) => {
    return (
        <>
            {detail.poster_path !== null ? (
                <CldImage
                    deliveryType="fetch"
                    src={`${baseImgUrl}${detail.poster_path}`}
                    alt="..."
                    width={300}
                    height={500}
                    className="w-60 rounded-sm sm:w-40 lg:w-96"
                />
            ) : (
                <div className="flex h-80 w-60 items-center justify-center rounded-sm bg-color-secondary sm:h-60 sm:w-40 lg:h-[500px] lg:w-96">
                    <MdImageNotSupported className="size-20" />
                </div>
            )}
        </>
    )
}

export default PosterDetailImage
