'use client'

import { FaVideoSlash } from 'react-icons/fa6'
import YouTube from 'react-youtube'

const VideoPlayer = ({ detail }) => {
    const results = detail.videos.results

    const trailer = results.find((result) => result.type == 'Trailer')

    return (
        <>
            {results.length !== 0 ? (
                <YouTube
                    videoId={trailer?.key}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={{ width: '820', height: '450' }}
                />
            ) : (
                <div className="flex h-[450px] w-[820px] items-center justify-center bg-color-secondary">
                    <FaVideoSlash className="size-20" />
                </div>
            )}
        </>
    )
}

export default VideoPlayer
