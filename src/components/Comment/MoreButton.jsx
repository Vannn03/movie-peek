'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoMdMore } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const MoreButton = ({ commentId, userEmail }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [popUp, setPopUp] = useState(false)

    // DELETE DATA
    const handleDeleteComment = async (event) => {
        event.preventDefault()

        setLoading(true)

        const data = { commentId, userEmail }
        const response = await fetch('/api/v1/comments', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const responseData = await response.json()

        if (responseData.status === 200) {
            setLoading(false)
            router.refresh()
        }
    }

    return (
        <div className="relative">
            <div onClick={() => setPopUp((prev) => !prev)}>
                <IoMdMore className="cursor-pointer text-lg text-color-white sm:text-xl" />
            </div>

            <div
                onClick={handleDeleteComment}
                className={`absolute right-0 cursor-pointer transition-all ${popUp ? 'pointer-events-auto top-6 opacity-100 sm:top-7' : 'pointer-events-none top-4 opacity-0 sm:top-5 '} rounded-full  bg-color-accent px-2 py-1 transition-all hover:brightness-105`}
            >
                {loading ? (
                    <div className="button-loader" />
                ) : (
                    <div className="flex items-center gap-1">
                        <MdDelete />
                        <p className="text-sm">Delete</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MoreButton
