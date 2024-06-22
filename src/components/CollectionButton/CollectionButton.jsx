'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaBookmark, FaX } from 'react-icons/fa6'

const CollectionButton = ({
    movieId,
    userEmail,
    collectionDB,
    movieImage,
    movieTitle,
    user,
}) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    // POST Data
    const handlePostCollection = async (event) => {
        event.preventDefault()

        setLoading(true)

        const data = { movieId, userEmail, movieImage, movieTitle }

        const response = await fetch('/api/v1/collections', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const collection = await response.json()

        if (collection.status == 200) {
            router.refresh()
        }
        setLoading(false)
        return
    }

    // DELETE DATA
    const handleDeleteCollection = async (event) => {
        event.preventDefault()

        setLoading(true)

        const data = { movieId, userEmail }

        const response = await fetch('/api/v1/collections', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const responseData = await response.json()

        if (responseData.status === 200) {
            router.refresh()
            setLoading(false)
        }
    }

    return (
        <>
            {!user ? (
                <Link
                    href={'/api/auth/signin'}
                    className={`flex w-60 items-center justify-center gap-2 rounded-full border border-color-light-accent bg-color-light-accent py-3 text-sm font-medium text-color-primary transition-all hover:brightness-105 sm:w-72 sm:text-base md:text-lg`}
                >
                    <FaBookmark /> Add to collection
                </Link>
            ) : collectionDB?.movieId == movieId ? (
                <button
                    onClick={handleDeleteCollection}
                    className={`flex w-60 items-center justify-center gap-2 rounded-full border border-color-light-accent bg-color-secondary py-3 text-sm font-medium text-color-light-accent transition-all hover:brightness-105 sm:w-72 sm:text-base md:text-lg`}
                >
                    {loading ? (
                        <div className="button-loader" />
                    ) : (
                        <>
                            <FaX />
                            Remove from Collection
                        </>
                    )}
                </button>
            ) : (
                <button
                    onClick={handlePostCollection}
                    className={`flex w-60 items-center justify-center gap-2 rounded-full border border-color-light-accent bg-color-light-accent py-3 text-sm font-medium text-color-primary transition-all hover:brightness-105 sm:w-72 sm:text-base md:text-lg`}
                >
                    {loading ? (
                        <div className="button-loader" />
                    ) : (
                        <>
                            <FaBookmark />
                            Add to collection
                        </>
                    )}
                </button>
            )}
        </>
    )
}

export default CollectionButton
