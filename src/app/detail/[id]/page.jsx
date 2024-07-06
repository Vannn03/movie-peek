import { oswald } from '@/app/fonts'
import CollectionButton from '@/components/CollectionButton/CollectionButton'
import BackgroundDetailImage from '@/components/OptimizedImage/BackgroundDetailImage'
import PosterDetailImage from '@/components/OptimizedImage/PosterDetailImage'
import { getMovieResponse } from '@/libs/api-libs'
import { authUserSessionServer } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CommentInput = dynamic(() => import('@/components/Comment/CommentInput'))
const CommentOutput = dynamic(
    () => import('@/components/Comment/CommentOutput')
)
const CreditList = dynamic(() => import('@/components/CreditList'))
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'))

const Page = async ({ params: { id } }) => {
    const detail = await getMovieResponse(
        `movie/${id}`,
        'append_to_response=videos'
    )
    const { cast, crew } = await getMovieResponse(`movie/${id}/credits`, '')
    const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_IMG_URL

    const user = await authUserSessionServer()

    // Find one matching movie
    const collectionDB = await prisma.collection.findFirst({
        where: { userEmail: user?.email, movieId: id },
    })

    const genresString = detail.genres.map((data) => data.name).join(', ')

    const detailData = [
        {
            name: 'Original title',
            description: detail?.original_title,
        },
        {
            name: 'Overview',
            description: detail?.overview,
        },
        {
            name: 'Genre',
            description: genresString,
        },
        {
            name: 'Release date',
            description: detail?.release_date,
        },
        {
            name: 'Duration',
            description: `${detail?.runtime} minutes`,
        },
        {
            name: 'Rating',
            description: `${detail?.vote_average.toFixed(1)} (${detail?.vote_count} reviewers)`,
        },
        {
            name: 'Status',
            description: detail?.status,
        },
    ]

    const handleNullContent = (content) => {
        return content === '' ? '-' : content
    }

    const loading = (
        <div className="flex h-dvh items-center justify-center bg-color-primary">
            <div className="spinner" />
        </div>
    )

    return (
        <Suspense fallback={loading}>
            <main className="relative bg-color-primary">
                {/* DETAIL */}
                <div className="relative h-fit w-full sm:h-[75dvh]">
                    <BackgroundDetailImage
                        detail={detail}
                        baseImgUrl={baseImgUrl}
                    />

                    <div className="absolute top-0 hidden h-full w-full bg-color-primary/75 sm:flex" />

                    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-6 pt-6 sm:absolute sm:top-0 sm:px-12 sm:pt-0 md:px-20 lg:flex-row lg:justify-start lg:gap-12">
                        {/* MAIN DETAIL */}
                        <PosterDetailImage
                            detail={detail}
                            baseImgUrl={baseImgUrl}
                        />
                        <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-8">
                            <h1
                                className={`${oswald.className} text-3xl font-semibold sm:text-4xl lg:text-center lg:text-5xl`}
                            >
                                {detail?.title}
                            </h1>
                            <div className="flex items-center gap-8 text-sm text-color-white/50 sm:text-base lg:text-lg">
                                <p className="font-semibold uppercase text-color-accent">
                                    {detail?.original_language}
                                </p>
                                <p className="italic">
                                    {handleNullContent(detail?.tagline)}
                                </p>
                            </div>
                            <p className="hidden text-center text-sm text-color-white/75 sm:flex sm:text-base md:text-lg lg:text-start lg:text-xl">
                                {detail.overview}
                            </p>
                            <CollectionButton
                                movieId={id}
                                userEmail={user?.email}
                                collectionDB={collectionDB}
                                movieImage={detail?.poster_path}
                                movieTitle={detail?.title}
                                user={user}
                            />
                        </div>
                    </div>
                </div>
                {/* OTHER DETAIL */}
                <div className="mx-auto flex w-full flex-col gap-6 p-6 sm:gap-8 sm:p-12 xl:w-[1200px]">
                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
                        <div className="flex h-fit flex-col gap-4 rounded bg-color-secondary p-6 sm:p-8">
                            {detailData?.map((data, index) => (
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
                        <div className="grid grid-cols-1 gap-6 sm:gap-8">
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

                    <hr className="border-color-white/35" />

                    <div className="mx-auto flex w-full flex-col gap-4">
                        <CommentInput
                            movieId={id}
                            userEmail={user?.email}
                            movieTitle={detail?.title}
                            userImage={user?.image}
                            userName={user?.name}
                            user={user}
                        />
                        <CommentOutput movieId={id} />
                    </div>
                </div>

                {/* YOUTUBE EMBED */}
                <VideoPlayer detail={detail} />
            </main>
        </Suspense>
    )
}

export default Page
