'use client'

import { useState } from 'react'
import { FaPlay, FaXmark } from 'react-icons/fa6'
import YouTube from 'react-youtube'

const VideoPlayer = ({ detail }) => {
    const results = detail.videos.results
    const trailer = results.find((result) => result.type === 'Trailer')

    const [toggleTrailer, setToggleTrailer] = useState(false)

    return (
        <>
            <div className="fixed bottom-6 right-6 z-40 sm:bottom-12 sm:right-12">
                <button
                    className={`flex ${toggleTrailer ? 'w-fit' : 'w-full'} items-center gap-2 rounded-full bg-color-light-accent p-5 text-sm font-medium text-color-white shadow-2xl transition-all hover:-translate-y-2 hover:shadow-color-light-accent hover:brightness-105 sm:p-6 sm:text-base md:text-lg`}
                    onClick={() => setToggleTrailer((prev) => !prev)}
                >
                    {toggleTrailer ? <FaXmark /> : <FaPlay />}
                </button>
            </div>
            {trailer && (
                <div
                    className={`${toggleTrailer ? 'pointer-events-auto opacity-100 ' : 'pointer-events-none opacity-0'} fixed top-0 flex h-dvh w-full items-center justify-center bg-color-primary/95 transition-all`}
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
