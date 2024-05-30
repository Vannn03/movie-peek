import Image from 'next/image'
import Link from 'next/link'
import { MdImageNotSupported } from 'react-icons/md'

const MovieGridList = ({ results }) => {
    const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_IMG_URL
    return (
        <>
            {results?.length != 0 ? (
                <div className="mt-6 grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {results?.map((value) => (
                        <div key={value.id} className="cursor-pointer">
                            <Link href={`/detail/${value.id}`}>
                                {value.poster_path !== null ? (
                                    <Image
                                        src={`${baseImgUrl}${value?.poster_path}`}
                                        alt="..."
                                        width={1000}
                                        height={1000}
                                        className="w-fit"
                                    />
                                ) : (
                                    <div className="flex h-[91.5%] items-center justify-center bg-color-secondary">
                                        <MdImageNotSupported className="size-20" />
                                    </div>
                                )}
                                <h1 className="mt-3 sm:text-lg">
                                    {value.title.length > 38
                                        ? `${value.title.slice(0, 38)}...`
                                        : value.title}
                                </h1>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="mt-8 h-[50dvh] text-center italic text-color-white/75">
                    <p>Movies not found</p>
                </div>
            )}
        </>
    )
}

export default MovieGridList
