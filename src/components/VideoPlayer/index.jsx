'use client'

import { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import YouTube from 'react-youtube'

const VideoPlayer = ({ detail }) => {
    const results = detail.videos.results
    const trailer = results.find((result) => result.type === 'Trailer')

    const [toggleTrailer, setToggleTrailer] = useState(false)

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 sm:bottom-12 sm:right-12">
                <button
                    className={`flex ${toggleTrailer ? 'w-fit' : 'w-full'} gap-2 rounded-sm bg-color-light-accent px-8 py-3 text-sm font-medium shadow-2xl sm:text-base md:text-lg`}
                    onClick={() => setToggleTrailer((prev) => !prev)}
                >
                    {toggleTrailer ? <FaXmark /> : 'Watch Trailer'}
                </button>
            </div>
            {trailer && (
                <div
                    className={`${toggleTrailer ? 'block' : 'hidden'} fixed top-0 flex h-dvh w-full items-center justify-center bg-black/90`}
                >
                    <YouTube
                        videoId={trailer.key}
                        onReady={(event) => event.target.pauseVideo()}
                        opts={{ width: '100%', height: '100%' }}
                        className="h-[180px] w-[300px] sm:h-[280px] sm:w-[500px]"
                    />
                </div>
            )}
        </>
    )
}

export default VideoPlayer
