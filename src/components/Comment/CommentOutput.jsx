import prisma from '@/libs/prisma'
import { formatDistance } from 'date-fns'
import { authUserSessionServer } from '@/libs/auth-libs'
import MoreButton from './MoreButton'
import CommentUserImage from '../OptimizedImage/CommentUserImage'

const CommentOutput = async ({ movieId }) => {
    const user = await authUserSessionServer()

    const commentDB = await prisma.comment.findMany({
        where: { movieId: movieId },
    })

    const timeDistance = (date) => {
        return formatDistance(date, new Date(), {
            addSuffix: true,
        })
    }

    return (
        <div className="mt-2">
            <div className="mb-6 flex justify-end">
                <p className="font-medium">
                    {commentDB.length === 0
                        ? '0 comment'
                        : commentDB.length === 1
                          ? '1 comment'
                          : `${commentDB.length} comments`}
                </p>
            </div>
            <div className="flex flex-col-reverse gap-6">
                {commentDB.map((data) => (
                    <div key={data.id} className="flex gap-4 sm:gap-6">
                        <CommentUserImage data={data} />
                        <div className="flex w-full flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <h1 className="text-sm font-medium text-color-white/75 sm:text-base">
                                    {data.userName}
                                </h1>
                                <div className="flex items-center justify-end gap-2">
                                    <p className="text-sm text-color-white/35 sm:text-base">
                                        {timeDistance(data.createdAt)}
                                    </p>
                                    {user?.email === data.userEmail ? (
                                        <MoreButton
                                            commentId={data.id}
                                            userEmail={user.email}
                                        />
                                    ) : null}
                                </div>
                            </div>
                            <p className="text-sm sm:text-lg">{data.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentOutput
