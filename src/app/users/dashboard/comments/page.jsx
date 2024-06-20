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
                <div className="mx-auto mt-6 grid grid-cols-1 gap-4 sm:gap-6 xl:w-[1000px]">
                    {commentDB.map((data) => (
                        <div
                            className="flex items-center justify-between bg-color-secondary"
                            key={data.id}
                        >
                            <div className="flex flex-col gap-2 py-4 pl-4">
                                <h1 className="text-lg font-medium sm:text-xl">
                                    {data.movieTitle}
                                </h1>
                                <p className="text-sm sm:text-base">
                                    {data.comment}
                                </p>
                            </div>
                            <DeleteButton
                                userEmail={user.email}
                                commentId={data.id}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Page
