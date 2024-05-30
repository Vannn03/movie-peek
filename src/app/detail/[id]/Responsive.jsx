import { oswald } from '@/app/fonts'
import CreditList from '@/components/CreditList'
import VideoPlayer from '@/components/VideoPlayer'

const Responsive = ({
    detail,
    handleNullContent,
    detailData,
    baseImgUrl,
    cast,
    crew,
}) => {
    return (
        <>
            {/* LEFT DETAIL RESPONSIVE */}
            <div className="mt-8 flex flex-col gap-8 sm:w-3/5 md:hidden xl:w-2/4">
                <h1
                    className={`${oswald.className} text-4xl font-semibold md:text-5xl`}
                >
                    {detail.title}
                </h1>
                <div className="flex items-center gap-8 text-sm text-color-white/50 sm:text-base md:text-lg">
                    <p className="font-semibold uppercase text-color-accent">
                        {detail.original_language}
                    </p>
                    <p className="italic">
                        {handleNullContent(detail.tagline)}
                    </p>
                </div>
                <p className="text-color-white/75 sm:text-lg md:text-xl">
                    {detail.overview}
                </p>

                {/* YOUTUBE EMBED */}
                <VideoPlayer detail={detail} />
            </div>
            {/* RIGHT DETAIL RESPONSIVE */}
            <div className="mt-8 flex flex-col gap-8 xl:hidden">
                <div className="flex h-fit flex-col gap-4 rounded-3xl bg-color-secondary p-8">
                    {detailData.map((data, index) => (
                        <div
                            key={index}
                            className="border-b border-color-white/25 pb-4 last-of-type:border-b-0"
                        >
                            <h1 className="text-sm text-color-white/75 md:text-base">
                                {data.name}
                            </h1>
                            <p className="mt-1 md:text-lg">
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
            {/* COMMENT RESPONSIVE */}
            <hr className="my-8 flex md:hidden" />

            <div className="flex flex-col md:hidden">
                <h1
                    className={`${oswald.className} mb-8 text-2xl font-medium md:text-3xl`}
                >
                    Comment
                </h1>
                <textarea
                    type="text"
                    placeholder="Comment here..."
                    className="w-full cursor-not-allowed rounded bg-color-white px-6 py-4 text-color-primary opacity-50 outline-none md:text-lg xl:text-xl"
                />
            </div>
        </>
    )
}

export default Responsive
