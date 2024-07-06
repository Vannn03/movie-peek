import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { MdImageNotSupported } from 'react-icons/md'

const MovieGridList = ({ results }) => {
    const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_IMG_URL
    return (
        <>
            {results?.length != 0 ? (
                <div className="mt-6 grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {results?.map((value) => (
                        <div
                            key={value.id}
                            className="group relative cursor-pointer"
                        >
                            <Link href={`/detail/${value.id}`}>
                                {value.poster_path !== null ? (
                                    <CldImage
                                        deliveryType="fetch"
                                        src={`${baseImgUrl}${value?.poster_path}`}
                                        alt="..."
                                        width={400}
                                        height={600}
                                        className="h-full w-full"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-color-secondary">
                                        <MdImageNotSupported className="size-20" />
                                    </div>
                                )}

                                <div className="absolute top-0 h-full w-full transition-all group-hover:backdrop-blur-lg" />

                                <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-8 opacity-0 transition-opacity group-hover:opacity-100">
                                    <div
                                        className={`rounded-full border-4 p-3 ${value.vote_average > 8 ? 'border-green-500' : value.vote_average > 6.5 ? 'border-yellow-500' : value.vote_average == 0 ? 'border-gray-500' : 'border-red-500'}`}
                                    >
                                        <p className="text-sm font-semibold sm:text-lg">
                                            {value.vote_average?.toFixed(1)}
                                        </p>
                                    </div>

                                    <p className="text-sm sm:text-lg">
                                        Click to view details
                                    </p>
                                </div>

                                <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/0 via-black/0 to-black/75" />

                                <h1 className="absolute bottom-0 w-full overflow-x-hidden text-ellipsis text-nowrap p-2 text-sm font-medium sm:p-4 sm:text-base lg:text-lg">
                                    {value.title}
                                </h1>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex h-[83dvh] items-center justify-center text-lg font-medium uppercase text-color-light-accent">
                    <p>No results found.</p>
                </div>
            )}
        </>
    )
}

export default MovieGridList
