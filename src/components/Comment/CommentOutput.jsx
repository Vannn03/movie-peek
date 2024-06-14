import prisma from '@/libs/prisma'
import Image from 'next/image'
import { formatDistance, parse, parseISO } from 'date-fns'

const CommentOutput = async ({ movieId }) => {
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
            <div className="grid grid-cols-1 gap-6">
                {commentDB.map((data) => (
                    <div key={data.id} className="flex justify-between">
                        <div className="flex gap-6">
                            <Image
                                src={data.userImage}
                                alt="..."
                                width={50}
                                height={50}
                                className="size-8 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm font-medium text-color-white/75 sm:text-base">
                                    {data.userName}
                                </h1>
                                <p className="sm:text-lg">{data.comment}</p>
                            </div>
                        </div>
                        <div className="text-sm text-color-white/35 sm:text-base">
                            {timeDistance(data.createdAt)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentOutput
