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
            {/* BACKGROUND IMAGE */}
            {detail.backdrop_path !== null ? (
                <Image
                    src={`${baseImgUrl}${detail.backdrop_path}`}
                    alt="..."
                    width={2000}
                    height={2000}
                    className="h-[50dvh] w-full object-cover"
                />
            ) : (
                <div className="flex h-[50dvh] items-center justify-center bg-color-secondary">
                    <MdImageNotSupported className="size-20" />
                </div>
            )}
            <div className="absolute top-0 h-[50dvh] w-full bg-color-primary/50" />

            {/* DETAIL */}
            <div className="flex h-fit justify-between gap-12 px-20 py-10">
                {/* POSTER IMAGE */}
                <div className="w-1/4 -translate-y-96">
                    <div className="sticky top-[535px] flex flex-col gap-4">
                        {detail.poster_path !== null ? (
                            <Image
                                src={`${baseImgUrl}${detail.poster_path}`}
                                alt="..."
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        ) : (
                            <div className="flex h-[512px] items-center justify-center bg-color-secondary">
                                <MdImageNotSupported className="size-20" />
                            </div>
                        )}
                        <button className="flex w-full items-center justify-center gap-2 rounded border-2 border-color-light-accent bg-color-primary px-12 py-4 text-lg font-medium uppercase tracking-wide text-color-light-accent">
                            <FaBookmark /> Add to Collection
                        </button>
                    </div>
                </div>
                {/* LEFT DETAIL */}
                <div className="flex w-2/4 flex-col gap-8">
                    <h1
                        className={`${oswald.className} text-5xl font-semibold`}
                    >
                        {detail.title}
                    </h1>
                    <div className="flex items-center gap-8 text-lg text-color-white/50">
                        <p className="font-semibold uppercase text-color-accent">
                            {detail.original_language}
                        </p>
                        <p className="italic">
                            {handleNullContent(detail.tagline)}
                        </p>
                    </div>
                    <p className="text-xl text-color-white/75">
                        {detail.overview}
                    </p>

                    {/* YOUTUBE EMBED */}
                    <VideoPlayer detail={detail} />

                    <hr />

                    <div>
                        <h1
                            className={`${oswald.className} mb-8 text-3xl font-medium`}
                        >
                            Comment
                        </h1>
                    </div>
                </div>
                {/* RIGHT DETAIL */}
                <div className="flex w-1/4 flex-col gap-8">
                    <div className="flex h-fit flex-col gap-4 rounded-3xl bg-color-secondary p-8">
                        {detailData.map((data, index) => (
                            <div
                                key={index}
                                className="border-b border-color-white/25 pb-4 last-of-type:border-b-0"
                            >
                                <h1 className="text-color-white/75">
                                    {data.name}
                                </h1>
                                <p className="mt-1 text-lg">
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
            </div>
        </main>
    )
}

export default Page
