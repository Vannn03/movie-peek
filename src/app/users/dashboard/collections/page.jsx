import { oswald } from '@/app/fonts'
import CollectionGridList from '@/components/CollectionGridList'
import { authUserSessionServer } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'

const Page = async () => {
    const user = await authUserSessionServer()
    const collectionDB = await prisma.collection.findMany({
        where: { userEmail: user.email },
    })

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
                    <CollectionGridList collectionDB={collectionDB} />
                </div>
            )}
        </div>
    )
}

export default Page
