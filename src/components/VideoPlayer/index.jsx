'use client'

import { useState } from 'react'
import YouTube from 'react-youtube'

const VideoPlayer = ({ detail }) => {
    const results = detail.videos.results
    const trailer = results.find((result) => result.type === 'Trailer')

    const [toggleTrailer, setToggleTrailer] = useState(false)

    return (
        <div className="fixed bottom-6 right-6">
            <button
                className="flex w-full items-center justify-center gap-2 rounded bg-color-accent px-12 py-4 font-medium uppercase tracking-wide shadow-xl md:text-lg"
                onClick={() => setToggleTrailer((prev) => !prev)}
            >
                {toggleTrailer ? 'Close Trailer' : 'Watch Trailer'}
            </button>
            {trailer && (
                <div className={`${toggleTrailer ? 'block' : 'hidden'}`}>
                    <YouTube
                        videoId={trailer.key}
                        onReady={(event) => event.target.pauseVideo()}
                        opts={{ width: '300', height: '200' }}
                    />
                </div>
            )}
        </div>
    )
}

export default VideoPlayer
