import { oswald } from '@/app/fonts'
import CreditList from '@/components/CreditList'
import VideoPlayer from '@/components/VideoPlayer'
import { getMovieResponse } from '@/libs/api-libs'
import Image from 'next/image'
import { FaBookmark } from 'react-icons/fa6'
import { MdImageNotSupported } from 'react-icons/md'
import Responsive from './Responsive'

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
            <div className="flex h-fit justify-between gap-8 p-6 sm:px-12 sm:py-10 lg:gap-12 lg:px-20 xl:flex-row">
                {/* POSTER IMAGE */}
                <div className="md:w-2/5 xl:w-1/4">
                    <div className="flex flex-col gap-4 xl:sticky xl:top-36">
                        {detail.poster_path !== null ? (
                            <Image
                                src={`${baseImgUrl}${detail.poster_path}`}
                                alt="..."
                                width={300}
                                height={500}
                                className="mx-auto w-80 md:w-full"
                            />
                        ) : (
                            <div className="flex h-[512px] w-full items-center justify-center bg-color-secondary">
                                <MdImageNotSupported className="size-20" />
                            </div>
                        )}
                        <button className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded border-2 border-color-light-accent bg-color-primary px-12 py-4 font-medium uppercase tracking-wide text-color-light-accent opacity-50 md:text-lg">
                            <FaBookmark /> Add to Collection
                        </button>
                    </div>
                    {/* RESPONSIVE VERSION */}
                    <Responsive
                        detail={detail}
                        handleNullContent={handleNullContent}
                        detailData={detailData}
                        baseImgUrl={baseImgUrl}
                        cast={cast}
                        crew={crew}
                    />
                </div>
                {/* LEFT DETAIL */}
                <div className="hidden w-3/5 flex-col gap-8 md:flex xl:w-2/4">
                    <h1
                        className={`${oswald.className} text-4xl font-semibold md:text-5xl`}
                    >
                        {detail.title}
                    </h1>
                    <div className="flex items-center gap-8 text-color-white/50 md:text-lg">
                        <p className="font-semibold uppercase text-color-accent">
                            {detail.original_language}
                        </p>
                        <p className="italic">
                            {handleNullContent(detail.tagline)}
                        </p>
                    </div>
                    <p className="text-lg text-color-white/75 md:text-xl">
                        {detail.overview}
                    </p>

                    {/* YOUTUBE EMBED */}
                    <VideoPlayer detail={detail} />

                    <hr />

                    <div>
                        <h1
                            className={`${oswald.className} mb-8 text-2xl font-medium md:text-3xl`}
                        >
                            Comment
                        </h1>
                        <textarea
                            type="text"
                            placeholder="Comment here..."
                            className="w-full cursor-not-allowed rounded bg-color-white px-6 py-4 text-color-primary opacity-50 outline-none md:text-lg xl:text-xl"
                            disabled
                        />
                    </div>
                </div>
                {/* RIGHT DETAIL */}
                <div className="hidden w-1/4 flex-col gap-8 xl:flex">
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
