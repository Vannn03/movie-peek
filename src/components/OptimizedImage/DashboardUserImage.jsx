'use client'

import { CldImage } from 'next-cloudinary'

const DashboardUserImage = ({ user }) => {
    return (
        <>
            <CldImage
                deliveryType="fetch"
                src={user?.image}
                alt="..."
                width={200}
                height={200}
                className="w-28 rounded-full sm:w-32"
            />
        </>
    )
}

export default DashboardUserImage
