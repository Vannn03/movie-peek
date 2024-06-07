import { oswald } from '@/app/fonts'
import DeleteButton from '@/components/Comment/DeleteButton'
import { authUserSessionServer } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'

const Page = async () => {
    const user = await authUserSessionServer()
    const commentDB = await prisma.comment.findMany({
        where: { userEmail: user.email },
    })

    return (
        <div className="h-dvh bg-color-primary p-6">
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
                <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {commentDB.map((data) => (
                        <div
                            className="flex flex-col gap-2 bg-color-secondary p-4"
                            key={data.id}
                        >
                            <div className="flex items-center justify-between">
                                <h1 className="text-lg font-medium sm:text-xl">
                                    {data.movieTitle}
                                </h1>
                                <DeleteButton
                                    userEmail={user.email}
                                    commentId={data.id}
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                {data.comment}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Page
