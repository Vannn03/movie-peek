'use client'

import { oswald } from '@/app/fonts'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoSend } from 'react-icons/io5'

const CommentInput = ({
    movieId,
    userEmail,
    userImage,
    userName,
    movieTitle,
    user,
}) => {
    const [comment, setComment] = useState('')
    const router = useRouter()

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    // POST Data to API
    const handlePostComment = async (event) => {
        if (!comment || comment.trim() === '') {
            return
        }

        event.preventDefault()

        const data = {
            movieId,
            userEmail,
            comment,
            userImage,
            userName,
            movieTitle,
        }

        const response = await fetch('/api/v1/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const createComment = await response.json()

        if (createComment.status == 200) {
            setComment('')
            router.refresh()
        }
        return
    }

    return (
        <>
            <h1
                className={`${oswald.className} text-2xl font-medium md:text-4xl`}
            >
                Comment
            </h1>
            <div className="flex flex-col items-end gap-2 rounded-sm bg-color-white">
                <textarea
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full rounded-sm bg-color-white px-4 py-3 text-color-primary outline-none md:text-lg"
                    onChange={handleCommentChange}
                />
                {!user ? (
                    <Link
                        href={'/api/auth/signin'}
                        className="px-4 py-3 font-medium transition-all hover:brightness-105"
                    >
                        <IoSend className="size-6 text-color-light-accent" />
                    </Link>
                ) : (
                    <button
                        onClick={handlePostComment}
                        className="px-4 py-3 font-medium transition-all hover:brightness-105"
                    >
                        <IoSend className="size-6 text-color-light-accent" />
                    </button>
                )}
            </div>
        </>
    )
}

export default CommentInput
