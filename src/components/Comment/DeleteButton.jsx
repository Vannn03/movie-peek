'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { FaX } from 'react-icons/fa6'

const DeleteButton = ({ commentId, userEmail }) => {
    const router = useRouter()
    // DELETE DATA
    const handleDeleteComment = async (event) => {
        event.preventDefault()

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
            router.refresh()
        }
    }

    return (
        <div onClick={handleDeleteComment} className="cursor-pointer">
            <FaX className="text-color-light-accent" />
        </div>
    )
}

export default DeleteButton
