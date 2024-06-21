'use client'

import { CldImage } from 'next-cloudinary'

const CommentUserImage = ({ data }) => {
    return (
        <>
            <CldImage
                deliveryType="fetch"
                src={data.userImage}
                alt="..."
                width={50}
                height={50}
                className="size-8 rounded-full"
            />
        </>
    )
}

export default CommentUserImage
