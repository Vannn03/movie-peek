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
            name: 'Genre',
            description: genresString,
        },
        {
            name: 'Release date',
            description: detail.release_date,
        },
        {
            name: 'Status',
            description: detail.status,
        },
        {
            name: 'Rating',
            description: `${detail.vote_average.toFixed(1)} (${detail.vote_count} reviewers)`,
        },
    ]

    const handleNullContent = (content) => {
        return content === '' ? '-' : content
    }

    return (
        <main className="relative bg-color-primary">
            {/* DETAIL */}
            <div className="relative h-[93.5dvh] w-full sm:h-[75dvh]">
                <Image
                    src={`${baseImgUrl}${detail.backdrop_path}`}
                    alt="..."
                    width={1900}
                    height={750}
                    className="h-full w-full object-cover"
                />

                <div className="absolute top-0 h-full w-full bg-color-primary/75" />

                <div className="absolute top-0 flex h-full flex-col items-center justify-center gap-8 px-6 sm:px-12 md:px-20 lg:flex-row lg:justify-start lg:gap-12">
                    {/* MAIN DETAIL */}
                    {detail.poster_path !== null ? (
                        <Image
                            src={`${baseImgUrl}${detail.poster_path}`}
                            alt="..."
                            width={300}
                            height={500}
                            className="w-40 rounded-sm lg:w-fit"
                        />
                    ) : (
                        <div className="flex items-center justify-center bg-color-secondary">
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
                        <p className="text-center text-sm text-color-white/75 sm:text-base md:text-lg lg:text-start lg:text-xl">
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
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
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
