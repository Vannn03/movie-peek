'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'

const DeleteButton = ({ commentId, userEmail }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

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
        <div
            onClick={handleDeleteComment}
            className="flex h-full cursor-pointer items-center justify-center px-4 text-color-light-accent transition-colors hover:bg-color-light-accent hover:text-color-white"
        >
            {loading ? (
                <div className="button-loader" />
            ) : (
                <MdDelete className="text-xl sm:text-2xl" />
            )}
        </div>
    )
}

export default DeleteButton
