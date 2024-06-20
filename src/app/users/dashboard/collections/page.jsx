import { oswald } from '@/app/fonts'
import { authUserSessionServer } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import Image from 'next/image'
import Link from 'next/link'

const Page = async () => {
    const user = await authUserSessionServer()
    const collectionDB = await prisma.collection.findMany({
        where: { userEmail: user.email },
    })

    const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_IMG_URL

    return (
        <div className="min-h-dvh bg-color-primary p-6">
            <h1
                className={`${oswald.className} text-2xl font-semibold sm:text-4xl`}
            >
                My Collections
            </h1>
            {collectionDB.length == 0 ? (
                <div className="flex h-[83dvh] items-center justify-center text-lg font-medium uppercase text-color-light-accent">
                    <p>No collections to display.</p>
                </div>
            ) : (
                <div className="mt-6 grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {collectionDB.map((data) => (
                        <div key={data.id} className="cursor-pointer">
                            <Link href={`/detail/${data.movieId}`}>
                                <Image
                                    src={`${baseImgUrl}${data.movieImage}`}
                                    alt="..."
                                    width={300}
                                    height={500}
                                    className="w-fit"
                                />
                                <h1 className="mt-3 text-sm font-medium sm:text-base lg:text-lg">
                                    {data.movieTitle.length > 24
                                        ? `${data.movieTitle.slice(0, 24)}...`
                                        : data.movieTitle}
                                </h1>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Page
