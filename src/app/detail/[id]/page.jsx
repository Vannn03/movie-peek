import { oswald } from '@/app/fonts'
import CreditList from '@/components/CreditList'
import VideoPlayer from '@/components/VideoPlayer'
import { getMovieResponse } from '@/libs/api-libs'
import Image from 'next/image'
import { FaBookmark } from 'react-icons/fa6'
import { MdImageNotSupported } from 'react-icons/md'

const Page = async ({ params: { id } }) => {
    const detail = await getMovieResponse(
        `/movie/${id}`,
        'append_to_response=videos'
    )
    const { cast, crew } = await getMovieResponse(`/movie/${id}/credits`, '')
    const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_IMG_URL

    const genresString = detail.genres.map((data) => data.name).join(', ')

    const detailData = [
        {
            name: 'Original title',
            description: detail.original_title,
        },
        {
            name: 'Overview',
            description: detail.overview,
        },
        {
            name: 'Genre',
            description: genresString,
        },
        {
            name: 'Release date',
            description: detail.release_date,
        },
        {
            name: 'Duration',
            description: `${detail.runtime} minutes`,
        },
        {
            name: 'Rating',
            description: `${detail.vote_average.toFixed(1)} (${detail.vote_count} reviewers)`,
        },
        {
            name: 'Status',
            description: detail.status,
        },
    ]

    const handleNullContent = (content) => {
        return content === '' ? '-' : content
    }

    return (
        <main className="relative bg-color-primary">
            {/* DETAIL */}
            <div className="relative h-fit w-full sm:h-[75dvh]">
                {detail.backdrop_path !== null ? (
                    <Image
                        src={`${baseImgUrl}${detail.backdrop_path}`}
                        alt="..."
                        width={1900}
                        height={750}
                        className="hidden h-full w-full object-cover sm:flex"
                    />
                ) : (
                    <div className="hidden h-full w-full items-center justify-center bg-color-secondary sm:flex">
                        <MdImageNotSupported className="size-40" />
                    </div>
                )}

                <div className="absolute top-0 hidden h-full w-full bg-color-primary/75 sm:flex" />

                <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-6 pt-6 sm:absolute sm:top-0 sm:px-12 sm:pt-0 md:px-20 lg:flex-row lg:justify-start lg:gap-12">
                    {/* MAIN DETAIL */}
                    {detail.poster_path !== null ? (
                        <Image
                            src={`${baseImgUrl}${detail.poster_path}`}
                            alt="..."
                            width={300}
                            height={500}
                            className="w-60 rounded-sm sm:w-40 lg:w-fit"
                        />
                    ) : (
                        <div className="flex h-80 w-60 items-center justify-center rounded-sm bg-color-secondary sm:h-60 sm:w-40 lg:h-[500px] lg:w-96">
                            <MdImageNotSupported className="size-20" />
                        </div>
                    )}
                    <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-8">
                        <h1
                            className={`${oswald.className} text-3xl font-semibold sm:text-4xl lg:text-5xl`}
                        >
                            {detail.title}
                        </h1>
                        <div className="flex items-center gap-8 text-sm text-color-white/50 sm:text-base lg:text-lg">
                            <p className="font-semibold uppercase text-color-accent">
                                {detail.original_language}
                            </p>
                            <p className="italic">
                                {handleNullContent(detail.tagline)}
                            </p>
                        </div>
                        <p className="hidden text-center text-sm text-color-white/75 sm:flex sm:text-base md:text-lg lg:text-start lg:text-xl">
                            {detail.overview}
                        </p>

                        <button className="flex w-fit cursor-not-allowed items-center justify-center gap-2 rounded-sm bg-color-light-accent px-8 py-3 text-sm font-medium opacity-50 sm:text-base md:text-lg">
                            <FaBookmark /> Save to collection
                        </button>
                    </div>
                </div>
            </div>
            {/* OTHER DETAIL */}
            <div className="flex flex-col gap-6 p-6 sm:gap-8 sm:p-12">
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    <div className="flex h-fit flex-col gap-4 rounded bg-color-secondary p-6 sm:p-8">
                        {detailData.map((data, index) => (
                            <div
                                key={index}
                                className="border-b border-color-white/25 pb-4 last-of-type:border-b-0"
                            >
                                <h1 className="text-sm text-color-white/75 sm:text-base">
                                    {data.name}
                                </h1>
                                <p className="mt-1 sm:text-lg">
                                    {handleNullContent(data.description)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:gap-8 xl:grid-cols-2">
                        <CreditList
                            baseImgUrl={baseImgUrl}
                            credit={cast}
                            title={'Casts'}
                        />
                        <CreditList
                            baseImgUrl={baseImgUrl}
                            credit={crew}
                            title={'Crews'}
                        />
                    </div>
                </div>

                <hr />

                <div>
                    <h1
                        className={`${oswald.className} mb-6 text-2xl font-medium md:text-3xl`}
                    >
                        Comment
                    </h1>
                    <textarea
                        type="text"
                        placeholder="Comment here..."
                        className="w-full cursor-not-allowed rounded bg-color-white px-4 py-3 text-color-primary opacity-50 outline-none md:text-lg xl:text-xl"
                        disabled
                    />
                </div>
            </div>

            {/* YOUTUBE EMBED */}
            <VideoPlayer detail={detail} />
        </main>
    )
}

export default Page
