import { oswald } from '@/app/fonts'
import DeleteButton from '@/components/Comment/DeleteButton'
import { authUserSessionServer } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import { formatDistance } from 'date-fns'
import Link from 'next/link'

const Page = async () => {
    const user = await authUserSessionServer()
    const commentDB = await prisma.comment.findMany({
        where: { userEmail: user.email },
    })

    const timeDistance = (date) => {
        return formatDistance(date, new Date(), {
            addSuffix: true,
        })
    }

    return (
        <div className="min-h-dvh bg-color-primary p-6">
            <h1
                className={`${oswald.className} text-2xl font-semibold sm:text-4xl`}
            >
                My Comments
            </h1>
            {commentDB.length == 0 ? (
                <div className="flex h-[83dvh] items-center justify-center text-lg font-medium uppercase text-color-light-accent">
                    <p>No comments to display.</p>
                </div>
            ) : (
                <div className="mx-auto mt-6 flex flex-col-reverse gap-4 sm:gap-6 xl:w-[1000px]">
                    {commentDB.map((data) => (
                        <div
                            key={data.id}
                            className="rounded-lg bg-color-secondary p-6 sm:p-8"
                        >
                            <div className="flex justify-end border-b border-color-white/35 pb-3 sm:pb-4">
                                <p className="text-sm text-color-white/35 sm:text-base">
                                    {timeDistance(data.createdAt)}
                                </p>
                            </div>
                            <div className="mt-3 flex flex-col items-end justify-between gap-3 sm:mt-4 sm:flex-row sm:items-center sm:gap-2">
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href={`/detail/${data.movieId}`}
                                        className="font-medium hover:underline sm:text-lg"
                                    >
                                        {data.movieTitle}
                                    </Link>
                                    <p className="text-sm text-color-white/75 sm:text-base">
                                        {data.comment}
                                    </p>
                                </div>
                                <DeleteButton
                                    userEmail={user.email}
                                    commentId={data.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Page
