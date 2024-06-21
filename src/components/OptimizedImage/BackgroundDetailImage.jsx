'use client'

import { CldImage } from 'next-cloudinary'
import { MdImageNotSupported } from 'react-icons/md'

const BackgroundDetailImage = ({ detail, baseImgUrl }) => {
    return (
        <>
            {detail.backdrop_path !== null ? (
                <CldImage
                    deliveryType="fetch"
                    src={`${baseImgUrl}${detail.backdrop_path}`}
                    alt="..."
                    width={1900}
                    height={750}
                    className="hidden h-full w-full object-cover sm:flex"
                />
            ) : (
                <div className="hidden h-full w-full items-center justify-center bg-color-secondary sm:flex">
                    <MdImageNotSupported className="size-40" />
                </div>
            )}
        </>
    )
}

export default BackgroundDetailImage
